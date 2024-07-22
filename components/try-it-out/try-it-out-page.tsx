'use client';

import React, { useState, useRef } from 'react';
import { Upload, Wand2, AlertCircle, Option } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import NewFeatureBanner from '@/components/try-it-out/new-feature-banner';
import {
  ModelSelect,
  Option as ModelSelectOption,
} from '@/components/try-it-out/model-select';
import { ModelType } from '@/types';

// Create a custom axios instance with default configuration
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

const modelOptions = [
  {
    value: ModelType.LITE,
    label: 'EmotiPaw Lite',
    description: 'Precision Basics',
  },
  {
    value: ModelType.PRO,
    label: 'EmotiPaw Pro',
    description: 'Enhanced Insights',
  },
];

const TryItOutPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedOption, setSelectedOption] = useState<ModelSelectOption>(
    modelOptions[0]
  );

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      // Check file extension
      const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !validExtensions.includes(fileExtension)) {
        setError(
          'Invalid file type. Please upload a JPG, JPEG, PNG, or GIF image.'
        );
        resolve(false);
        return;
      }

      // Check file size (max 4.5 MB)
      const maxSize = 4.5 * 1024 * 1024; // 4.5 MB in bytes
      if (file.size > maxSize) {
        setError('File size exceeds 4.5 MB. Please upload a smaller image.');
        resolve(false);
        return;
      }

      // Check image dimensions
      const img = new globalThis.Image();
      img.onload = () => {
        if (img.width < 300 || img.height < 300) {
          setError(
            'Image dimensions are too small. Minimum size is 300x300 pixels.'
          );
          resolve(false);
        } else if (img.width > 4032 || img.height > 4032) {
          setError(
            'Image dimensions are too large. Maximum size is 4032x4032 pixels.'
          );
          resolve(false);
        } else {
          resolve(true);
        }
      };
      img.onerror = () => {
        setError('Failed to load image. Please try another file.');
        resolve(false);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const getPresignedUrl = async (
    fileName: string,
    fileType: string
  ): Promise<string> => {
    try {
      const response = await axiosInstance.get('/api/get-presigned-url', {
        params: { fileName, fileType },
      });
      return response.data.presignedUrl;
    } catch (error) {
      console.error('Error getting presigned URL:', error);
      throw new Error('Failed to get presigned URL for upload');
    }
  };

  const uploadToS3 = async (
    presignedUrl: string,
    file: File
  ): Promise<string> => {
    try {
      await axiosInstance.put(presignedUrl, file, {
        headers: { 'Content-Type': file.type },
      });
      return presignedUrl.split('?')[0]; // Return the URL without query parameters
    } catch (error) {
      console.error('Error uploading to S3:', error);
      throw new Error('Failed to upload image to storage');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const uploadToLocalFolder = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('filename', file.name);

      const response = await axiosInstance.post(
        `/api/upload-image?filename=${file.name}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      //   const response = await fetch(`/api/upload-image?filename=${file.name}`, {
      //     method: 'POST',
      //     body: file,
      //   });

      //   remove this after implenting presigned url
      return response.data.imageUrl;

      //   Temporary for local testing
      //   return `http://localhost:3000/_next/image?url=%2Fhappy-pet.jpg&w=3840&q=75`;
    } catch (error) {
      console.error('Error uploading to local folder:', error);
      throw new Error('Failed to upload image to local folder');
    }
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setError(null);
      // const start = new Date();
      try {
        setIsUploading(true);
        const isValid = await validateImage(file);
        if (isValid) {
          //   For production: use getPresignedUrl and uploadToS3
          //   const presignedUrl = await getPresignedUrl(file.name, file.type);
          //   const uploadedUrl = await uploadToS3(presignedUrl, file);

          //   For local testing: use uploadToLocalFolder
          const uploadedUrl = await uploadToLocalFolder(file);
          setSelectedImage(URL.createObjectURL(file));
          setUploadedImageUrl(uploadedUrl);
          setAnalysisResult(null);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred during image upload');
        }
        setSelectedImage(null);
        setUploadedImageUrl(null);
      } finally {
        setIsUploading(false);
        // const timeTaken = new Date() - start;
        // const timeTakenSec = timeTaken / 1000;
        // console.log(timeTakenSec, 'time taken in  page');
      }
    }
  };

  const analyzeImagePro = async (imageUrl: string): Promise<string> => {
    try {
      const response = await fetch('/api/emotion/analyze/pro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (!response.ok) {
        console.error('Error analyzing image:', response.json());
        throw new Error('Failed to analyze the image');
      }

      return response.json();
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error('Failed to analyze the image');
    }
  };

  const analyzeImageLite = async (): Promise<string> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch('/api/emotion/analyze/lite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Error analyzing image:', response.json());
        throw new Error('Failed to analyze the image');
      }

      return response.json();
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error('Failed to analyze the image');
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedImageUrl) return;
    setIsAnalyzing(true);
    setError(null);
    try {
      let result;
      if (selectedOption.value === ModelType.LITE) {
        result = await analyzeImageLite();
      } else {
        result = await analyzeImagePro(uploadedImageUrl);
      }

      setAnalysisResult(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred during image analysis');
      }
      setAnalysisResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleModelChange = (option: ModelSelectOption) => {
    setSelectedOption(option);
    console.log('Selected model:', option.value);
    // Add your logic here to handle the model change
  };

  const handleDecodeNowClick = () => {
    setSelectedOption(modelOptions[1]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Peek into Your Pet's Emotions
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <p className="text-lg text-center mb-6 text-gray-600">
              Upload a photo of your furry friend, and let our AI decode their
              mood!
            </p>

            <div className="flex justify-center flex-wrap">
              <ModelSelect
                options={modelOptions}
                selectedOption={selectedOption}
                onChange={handleModelChange}
              />
              <label className="btn btn-primary flex items-center cursor-pointer mb-4 rounded-md m-0.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={handleUploadClick}
                  disabled={isUploading}
                  className="w-full text-white py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2" size={20} />
                      Upload Photo
                    </>
                  )}
                </button>
              </label>
            </div>
            <div className="flex flex-col items-center mb-4">
              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-4 w-full max-w-md"
                  role="alert"
                >
                  <strong className="font-medium">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <p className="text-sm text-gray-500 text-center mt-2">
                Accepted formats: JPG, JPEG, PNG, GIF
                <br />
                Min size: 300x300 pixels | Max size: 4000x4000 pixels, 4.5 MB
              </p>
            </div>

            {selectedImage && (
              <div className="mb-6">
                <div className="w-full h-64 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                  <img
                    src={selectedImage}
                    alt="Selected pet"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={!uploadedImageUrl || isAnalyzing}
              className="btn btn-accent w-full flex items-center justify-center rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              {isAnalyzing ? (
                <div className="animate-spin mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                <Wand2 className="mr-2" size={18} />
              )}
              {isAnalyzing ? 'Analyzing...' : 'Analyze Pet Mood'}
            </button>
          </div>

          {analysisResult && (
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Analysis Result
              </h2>
              <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                <ReactMarkdown className="prose max-w-none">
                  {analysisResult}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        <NewFeatureBanner onDecodeNowClick={handleDecodeNowClick} />

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Why use EmotiPaw?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
              <h4 className="font-semibold mb-2 text-gray-700">
                Understand Your Pet
              </h4>
              <p className="text-gray-600">
                Gain insights into your pet's emotional state and needs.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
              <h4 className="font-semibold mb-2 text-gray-700">
                Strengthen Your Bond
              </h4>
              <p className="text-gray-600">
                Deepen your connection by responding to your pet's feelings.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
              <h4 className="font-semibold mb-2 text-gray-700">
                Track Mood Over Time
              </h4>
              <p className="text-gray-600">
                Monitor your pet's emotional well-being and spot trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItOutPage;
