'use client';

import { useState, ChangeEvent, FormEvent, Suspense, lazy } from 'react';
import Image from 'next/image';
import { EmotionResult } from '@/types';
import { analyzePetEmotion } from '@/services/llm-api';

const DemoResult = lazy(() => import('./demo-result'));

export default function DemoUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedImage) return;

    setIsLoading(true);
    try {
      const result = await analyzePetEmotion(selectedImage);
      setResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
      // TODO: Handle error state
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="cursor-pointer text-blue-600 hover:text-blue-800"
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
          type="submit"
          disabled={!selectedImage || isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Pet Emotion'}
        </button>
      </form>
      {result && (
        <Suspense fallback={<div>Loading result...</div>}>
          <DemoResult result={result} />
        </Suspense>
      )}
    </div>
  );
}
