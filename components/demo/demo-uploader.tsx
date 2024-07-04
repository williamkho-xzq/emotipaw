'use client';

import { useState, useTransition, Suspense } from 'react';
import Image from 'next/image';
import AnalysisResult from '@/components/demo/analysis-result';

function LoadingFallback() {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">Analyzing image...</div>
  );
}

export default function DemoUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setUploadedImageUrl(null);
    }
  };

  const handleAnalyze = async () => {
    if (selectedImage) {
      startTransition(async () => {
        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
          const response = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('Failed to upload image');
          }

          const data = await response.json();
          // setUploadedImageUrl(data.imageUrl);
          setUploadedImageUrl(
            'http://localhost:3000/_next/image?url=%2Fhappy-pet.jpg&w=3840&q=75'
          );
        } catch (error) {
          console.error('Error uploading image:', error);
          // Handle error (e.g., show an error message to the user)
        }
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Select an image
        </label>
        {previewUrl && (
          <div className="mt-4 relative w-full h-64">
            <Image
              src={previewUrl}
              alt="Preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
      <button
        onClick={handleAnalyze}
        disabled={!selectedImage || isPending}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
      >
        {isPending ? 'Analyzing...' : 'Analyze Pet Emotion'}
      </button>
      {uploadedImageUrl && (
        <Suspense fallback={<LoadingFallback />}>
          <AnalysisResult imageUrl={uploadedImageUrl} />
        </Suspense>
      )}
    </div>
  );
}
