import { EmotionResult } from '@/types';

interface DemoResultProps {
  result: EmotionResult;
}

export default function DemoResult({ result }: DemoResultProps) {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Analysis Result</h2>
      <p className="text-lg mb-2">
        Detected emotion: <span className="font-bold">{result.emotion}</span>
      </p>
      <p className="text-lg mb-4">
        Confidence:{' '}
        <span className="font-bold">
          {(result.confidence * 100).toFixed(2)}%
        </span>
      </p>
      <h3 className="text-xl font-semibold mb-2">LLM Explanation:</h3>
      <p className="whitespace-pre-wrap">{result.explanation}</p>
    </div>
  );
}
