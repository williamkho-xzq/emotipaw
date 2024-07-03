import { EmotionResult } from '@/types';

export async function analyzePetEmotion(
  imageFile: File
): Promise<EmotionResult> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock LLM response
  const mockResponse = `
Based on the image analysis, the pet appears to be showing signs of happiness. 
The relaxed posture, open mouth resembling a smile, and bright eyes are indicative of a content and joyful emotional state.
Confidence in this assessment is high, approximately 85%.
  `.trim();

  return {
    emotion: 'Happy',
    confidence: 0.85,
    explanation: mockResponse,
  };
}
