import { NextRequest, NextResponse } from 'next/server';

const emotions = [
  'happy',
  'excited',
  'relaxed',
  'anxious',
  'fearful',
  'curious',
  'tired',
  'playful',
  'affectionate',
];

function generateAnalysis(emotion: string): string {
  const analyses = {
    happy: `The pet appears to be happy. Here are the indicators:

**Facial Expression**: The pet's eyes are bright and wide, with a soft, relaxed gaze. There's a noticeable ease around the mouth area, which gives the impression of a subtle "smile". The ears are positioned in a neutral to slightly forward manner, indicating a positive state.

**Body Language**: The pet's overall posture is relaxed yet alert. The head is held at a comfortable level, neither too high nor too low. The visible parts of the body, particularly around the shoulders and neck, are free from tension, suggesting a state of contentment.

The relaxed facial muscles and bright eyes are strong indicators of a positive emotional state. The comfortable posture further supports this assessment. This snapshot provides compelling evidence of the pet's happy disposition at this moment.`,

    excited: `The pet appears to be excited. Here are the indicators:

**Facial Expression**: The pet's eyes are wide and alert, with pupils that are slightly dilated. The mouth is slightly open, with the tongue possibly visible. The ears are noticeably perked up and oriented forward, a clear sign of keen interest.

**Body Language**: There's a noticeable increase in muscle tension, though not in a negative way. The pet's posture is upright and alert. The body position suggests readiness for action. There are signs of slight trembling or quivering, particularly in the limbs or body.

The combination of alert eyes, forward-oriented ears, and the overall body posture strongly indicates a state of excitement. The visible muscle tension and body positioning suggest that the pet is highly engaged with its environment. This excited state often occurs when a pet anticipates something enjoyable or stimulating.`,

    relaxed: `The pet appears to be relaxed. Here are the indicators:

**Facial Expression**: The pet's eyes are soft, with a slow blink rate. The mouth is closed but not tense, and there are subtle, loose movements around the whisker area. The ears are positioned in a neutral manner, neither alertly perked nor flattened against the head.

**Body Language**: The overall body posture is loose and comfortable. The visible muscles, especially around the face, neck, and shoulders, are noticeably relaxed. The pet's position is loose and natural. The spine has a gentle, natural curve rather than a rigid, straight posture.

The combination of soft eyes, neutral ear position, and visibly relaxed muscles are clear indicators of a calm, relaxed state. The absence of tension in the body and face suggests that the pet feels safe and comfortable in its environment. This relaxed state indicates a positive emotional balance.`,

    anxious: `The pet appears to be anxious. Here are the indicators:

**Facial Expression**: The pet's eyes are widened, with more white visible than usual. There is noticeable tension around the eye area, giving a somewhat furrowed appearance. The mouth appears slightly tense, with lips potentially pulled back subtly. The ears are positioned back or flattened against the head.

**Body Language**: There is visible tension in the pet's body, particularly noticeable in the neck and shoulder areas. The overall posture is lowered, as if the pet is trying to make itself smaller. The body position suggests readiness for quick action if needed.

The combination of widened eyes, tense facial muscles, and the overall body posture strongly indicates a state of anxiety. The lowered body position and visible muscle tension suggest that the pet is feeling unsure or threatened. These physical signs are typical stress responses in pets, indicating discomfort with the current situation or environment.`,

    fearful: `The pet appears to be fearful. Here are the indicators:

**Facial Expression**: The pet's eyes are wide open with noticeably dilated pupils. There is visible white around the iris, often referred to as "whale eye" in pets. The mouth is tightly closed, with visible tension in the jaw area. The ears are flattened and pulled back close to the head.

**Body Language**: The body posture is lowered, with the pet making itself as small as possible. There is visible trembling or shaking, particularly noticeable in the legs or body. The muscles, especially around the face and shoulders, are visibly tense.

The combination of dilated pupils, flattened ears, and the cowering posture are classic signs of fear in pets. The visible trembling and attempt to appear smaller are physiological and behavioral responses to perceived threats. This snapshot captures a moment of significant stress for the pet, indicating it feels highly threatened or overwhelmed by its environment or a specific stimulus.`,

    curious: `The pet appears to be curious. Here are the indicators:

**Facial Expression**: The pet's eyes are wide and alert, with a soft, inquisitive gaze focused on something specific. The ears are perked up and angled towards the object of interest. There is a slight tilt of the head, which is a classic indication of curiosity in many pets.

**Body Language**: The body posture is alert but not tense. There is a visible lean forward in the pet's stance, indicating interest. The neck is extended, suggesting the pet is trying to get a closer look at something. The body position implies readiness for exploration rather than alarm.

The combination of the alert yet soft gaze, the head tilt, and the forward-leaning posture strongly suggest a state of curiosity. The pet's body language indicates active engagement with its environment in a positive, inquisitive manner. This curious state is excellent for learning and positive interactions, showing a pet that's mentally stimulated and comfortable enough to explore its surroundings.`,

    tired: `The pet appears to be tired. Here are the indicators:

**Facial Expression**: The pet's eyes are half-closed or blinking slowly. There is visible drooping in the eyelids. The overall facial muscles are very relaxed, giving a somewhat droopy appearance, especially noticeable around the jowls or whisker area.

**Body Language**: The body posture is lowered, with a noticeable lack of energy in the pet's position. The muscles are completely relaxed, and the pet is in the process of lying down or settling into a resting position. If standing, the stance appears less stable or balanced than usual.

The combination of half-closed eyes, relaxed facial muscles, and the overall lowered, relaxed posture are clear indicators of fatigue in pets. The lack of muscle tone and the pet's positioning suggest a state of physical tiredness. This snapshot provides strong evidence of the pet's need for rest at this moment.`,

    playful: `The pet appears to be playful. Here are the indicators:

**Facial Expression**: The pet's eyes are bright and fully alert, with a soft, engaging gaze. The mouth is slightly open in what's often described as a "play face" in many pets. The ears are perked up and oriented forward, showing keen interest and excitement.

**Body Language**: The body posture is energetic and loose. There are signs of exaggerated movements, such as a play bow (front end lowered, rear end up) in dogs, or a crouched, ready-to-pounce position in cats. The pet's body appears ready for action, with a visible spring-like tension that suggests imminent movement.

The combination of the bright, engaging eyes, the "play face," and the energetic body posture are classic signs of a playful mood in pets. The readiness for action visible in the pet's stance indicates a state of positive arousal and engagement. This snapshot captures a moment of joyful, exuberant behavior, suggesting the pet is in a highly positive emotional state, likely in response to an engaging stimulus in its environment.`,

    affectionate: `The pet appears to be affectionate. Here are the indicators:

**Facial Expression**: The pet's eyes are soft and slightly squinted, making direct but gentle eye contact with the camera or someone near it. This is often referred to as a "love gaze" in pets. The mouth is relaxed, and there's a subtle upward curve at the corners. The ears are in a neutral to slightly forward position.

**Body Language**: The body posture is relaxed and open. The pet is leaning towards the camera or another subject in the image, suggesting a desire for proximity or contact. There are signs of gentle nuzzling or rubbing behaviors. The overall muscle tone is relaxed, and the pet's position indicates comfort and trust.

The combination of the soft eye contact, relaxed facial features, and the open, leaning body posture strongly indicate an affectionate state. The pet's body language suggests a strong, positive emotional connection with either the photographer or another subject in its environment. This display of affection is a clear sign of the pet's comfort, trust, and positive emotional attachment. Such affectionate behavior is crucial for the human-animal bond and indicates a pet that feels secure and emotionally fulfilled in its current situation.`,
  };

  return (
    analyses[emotion as keyof typeof analyses] ||
    "Unable to determine the pet's emotion from this image."
  );
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    const analysis = generateAnalysis(randomEmotion);
    return NextResponse.json(analysis);
  }

  return NextResponse.json(
    { error: `Method ${req.method} Not Allowed` },
    { status: 405 }
  );
}
