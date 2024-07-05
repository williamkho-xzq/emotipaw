'use client';

import { use } from 'react';
import Image from 'next/image';

// This function will be used to fetch the analysis
async function fetchAnalysis(imageUrl: string) {
  const response = await fetch('/api/analyze-emotion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    return {
      analysis: `API Failure ${response.statusText}`,
    };
  }

  return response.json();
}

interface AnalysisResultProps {
  imageUrl: string;
}

export default function AnalysisResult({ imageUrl }: AnalysisResultProps) {
  // Use the `use` hook to handle the promise
  const { analysis } = use(fetchAnalysis(imageUrl));

  return (
    <div className="mt-8">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Analysis Result</h2>
        <p className="whitespace-pre-wrap">{analysis}</p>
      </div>
    </div>
  );
}
