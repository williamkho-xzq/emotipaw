import { NextRequest, NextResponse } from 'next/server';

const emotions = [
  'happy',
  'fear',
  'anger',
  'sad',
  'disgust',
  'surprised',
  'curious',
  'affectionate',
  'anxious',
];

function generateAnalysis(emotion: string): string {
  const analyses = {
    happy: `The pet appears to be happy. Here are the indicators:

**Facial Expression**: The pet's eyes are bright and wide, with a soft, relaxed gaze. There is a noticeable ease around the mouth area, which gives the impression of a subtle "smile". The ears are positioned in a neutral to slightly forward manner, indicating a positive state.

**Body Language**: The pet's overall posture is relaxed yet alert. The head is held at a comfortable level, neither too high nor too low. The visible parts of the body, particularly around the shoulders and neck, are free from tension, suggesting a state of contentment.

The relaxed facial muscles and bright eyes are strong indicators of a positive emotional state. The comfortable posture further supports this assessment. This snapshot provides compelling evidence of the pet's happy disposition at this moment.`,

    fear: `The pet appears to be fearful. Here are the indicators:

**Facial Expression**: The pet's eyes are wide open with noticeably dilated pupils. There is visible white around the iris, often referred to as "whale eye". The mouth is tightly closed, with visible tension in the jaw area. The ears are flattened and pulled back close to the head, or they might be rapidly moving as if trying to catch sounds from all directions.

**Body Language**: The body posture is lowered, with the pet making itself as small as possible. There is visible trembling or shaking, particularly noticeable in the legs or body. The muscles, especially around the face and shoulders, are visibly tense. The pet may be pressed against a surface or attempting to hide, indicating a desire to escape the perceived threat.

These physical signs collectively point to a state of fear in the pet. The animal is exhibiting classic defensive postures and expressions, suggesting it perceives a significant threat in its environment. This fearful state indicates the pet is experiencing high levels of stress and discomfort in the moment captured by the image.`,

    anger: `The pet appears to be angry. Here are the indicators:

**Facial Expression**: The eyes are narrowed and intense, with a hard, focused stare. Visible tension surrounds the facial area, particularly near the mouth and eyes. The ears are positioned in a way that indicates alertness and potential aggression.

**Body Language**: The body posture is rigid and tense. The pet is in a stance that shows readiness for action. Visible fur appears raised, indicating heightened arousal. The overall body language reveals a defensive or potentially aggressive state.

This combination of intense facial expression and confrontational body language strongly indicates a state of anger or aggression in the pet. The animal displays warning signs, feeling threatened or preparing to defend itself. This angry state demonstrates that the pet is experiencing high arousal and stress in this moment.`,

    sad: `The pet appears to be sad. Here are the indicators:

**Facial Expression**: The eyes appear droopy or half-closed, with a vacant or distant gaze. A noticeable lack of muscle tone surrounds the face, giving an overall "deflated" appearance. The ears are positioned lower than usual.

**Body Language**: The overall body posture is lowered and lacks energy. The head is held low, and the pet is hunched or curled up. Limbs are held close to the body. A general impression of lethargy is evident in the pet's position, with minimal visible muscle tension.

These signs collectively indicate a state of sadness or depression in the pet. The lack of engagement with its surroundings and the overall "deflated" appearance reveal that the animal is experiencing low mood or energy. This sad state is a response to changes in the environment, health issues, or other factors affecting the pet's well-being at this time.`,

    disgust: `The pet appears to be displaying disgust. Here are the indicators:

**Facial Expression**: The facial features are contorted, with visible tension around the nose and mouth area. The eyes are partially closed or squinted, with visible tension around the eye area. The mouth is open slightly, as if expelling something.

**Body Language**: The head is pulled back or turned away. The body posture reveals a desire to create distance, with the pet leaning or moving away from something in its environment. Visible attempts to shake off or remove something unpleasant are present.

This combination of facial contortions and avoidance body language indicates a state of disgust in the pet. The animal shows a strong aversion to something in its environment, experiencing a smell, taste, or sight that it finds extremely unpleasant. This disgusted state demonstrates that the pet is experiencing significant discomfort and a desire to avoid or remove itself from the offending stimulus at this moment.`,

    surprised: `The pet appears to be surprised. Here are the indicators:

**Facial Expression**: The eyes are wide open, with the whites of the eyes more visible than usual. The facial muscles are tense, particularly around the eyes and forehead area. The ears are erect and forward-facing, showing alertness and attention.

**Body Language**: The body posture is frozen or very still, as if the pet has suddenly stopped all other activity. A slight backwards lean or a quick change in posture is evident. The head is raised, and the neck is extended. Muscles show sudden tension, as if prepared for quick action.

This combination of widened eyes, alert facial features, and a frozen or startled posture strongly indicates a state of surprise in the pet. The animal has encountered something unexpected in its environment, causing a momentary state of heightened awareness and readiness. This surprised state reveals that the pet is experiencing a sudden increase in arousal and attention at this instant.`,

    curious: `The pet appears to be curious. Here are the indicators:

**Facial Expression**: The pet's eyes are wide and alert, with a soft, inquisitive gaze focused on something specific. The ears are perked up and angled towards the object of interest. There is a slight tilt of the head, which is a classic indication of curiosity in many pets.

**Body Language**: The body posture is alert but not tense. There is a visible lean forward in the pet's stance, indicating interest. The neck is extended, suggesting the pet is trying to get a closer look at something. The body position implies readiness for exploration rather than alarm.

The combination of the alert yet soft gaze, the head tilt, and the forward-leaning posture strongly suggest a state of curiosity. The pet's body language indicates active engagement with its environment in a positive, inquisitive manner. This curious state is excellent for learning and positive interactions, showing a pet that's mentally stimulated and comfortable enough to explore its surroundings.`,

    affectionate: `The pet appears to be affectionate. Here are the indicators:

**Facial Expression**: The pet's eyes are soft and slightly squinted, making direct but gentle eye contact with the camera or someone near it. This is often referred to as a "love gaze" in pets. The mouth is relaxed, and there's a subtle upward curve at the corners. The ears are in a neutral to slightly forward position.

**Body Language**: The body posture is relaxed and open. The pet is leaning towards the camera or another subject in the image, suggesting a desire for proximity or contact. There are signs of gentle nuzzling or rubbing behaviors. The overall muscle tone is relaxed, and the pet's position indicates comfort and trust.

The combination of the soft eye contact, relaxed facial features, and the open, leaning body posture strongly indicate an affectionate state. The pet's body language suggests a strong, positive emotional connection with either the photographer or another subject in its environment. This display of affection is a clear sign of the pet's comfort, trust, and positive emotional attachment. Such affectionate behavior is crucial for the human-animal bond and indicates a pet that feels secure and emotionally fulfilled in its current situation.`,

    anxious: `The pet appears to be anxious. Here are the indicators:

**Facial Expression**: The pet's eyes are widened, with more white visible than usual. There is noticeable tension around the eye area, giving a somewhat furrowed appearance. The mouth appears slightly tense, with lips potentially pulled back subtly. The ears are positioned back or flattened against the head.

**Body Language**: There is visible tension in the pet's body, particularly noticeable in the neck and shoulder areas. The overall posture is lowered, as if the pet is trying to make itself smaller. The body position suggests readiness for quick action if needed.

The combination of widened eyes, tense facial muscles, and the overall body posture strongly indicates a state of anxiety. The lowered body position and visible muscle tension suggest that the pet is feeling unsure or threatened. These physical signs are typical stress responses in pets, indicating discomfort with the current situation or environment.`,
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
