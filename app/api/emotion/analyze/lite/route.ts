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

**Facial Expression**: The pet's eyes are bright and wide, with a soft gaze. There's a noticeable relaxation around the mouth area, sometimes giving the impression of a subtle "smile". The ears are positioned in a neutral to slightly forward manner.

**Body Language**: The overall posture is relaxed yet alert. The head is held at a comfortable level, neither too high nor too low. The muscles, particularly around the shoulders and neck, appear loose and free from tension.

These signs collectively indicate a positive emotional state. The relaxed facial muscles and bright eyes suggest contentment, while the alert posture shows the pet is engaged with its environment in a positive way. This combination of relaxation and gentle alertness is a hallmark of a happy, well-adjusted pet.`,

    excited: `The pet appears to be excited. Here are the indicators:

**Facial Expression**: The eyes are wide and alert, with pupils slightly dilated. The mouth may be slightly open, possibly with a visible tongue. Ears are perked up and oriented forward, showing keen interest.

**Body Language**: There's a noticeable increase in muscle tension, but not in a negative way. The pet's posture is upright and alert, with quick, jerky movements of the head or body. You might observe slight trembling or quivering.

This combination of alertness and physical readiness is typical of an excited pet. The dilated pupils and forward-oriented ears indicate high interest and arousal, while the muscle tension and quivering suggest the pet is primed for action. This state is often seen when a pet anticipates something enjoyable, like playtime or a treat.`,

    relaxed: `The pet appears to be relaxed. Here are the indicators:

**Facial Expression**: The eyes are soft, often with a slow blink rate. The mouth is closed but not tense, and you might notice some subtle movements around the whisker area. Ears are in a neutral position, neither alert nor flattened.

**Body Language**: The overall body posture is loose and comfortable. Muscles are visibly relaxed, especially around the face, neck, and shoulders. The pet may be in a reclined position if lying down, or standing/sitting with a gently curved spine rather than a rigid, straight posture.

These signs are clear indicators of a relaxed state. The slow blink rate, often called "love eyes" in cats, is a sign of contentment in many pets. The neutral ear position and lack of muscle tension throughout the body suggest the pet feels safe and comfortable in its current environment. This state of relaxation is crucial for a pet's overall well-being and is a good sign of a stress-free environment.`,

    anxious: `The pet appears to be anxious. Here are the indicators:

**Facial Expression**: The eyes are widened, often with more white showing than usual. The brow area may appear furrowed. Lips might be pulled back slightly, and you may notice increased swallowing or licking of lips. Ears are typically pulled back or flattened against the head.

**Body Language**: There's visible tension in the body, particularly in the neck and shoulder areas. The pet may be holding its body in a lowered position, as if trying to appear smaller. Quick, darting movements of the eyes or head are common.

These signs collectively point to a state of anxiety. The widened eyes and pulled-back ears indicate a state of alertness tinged with fear. The lowered body posture is an attempt to appear non-threatening, which animals often do when they feel unsure or scared. The tension in the body suggests the pet is prepared for a quick reaction if needed. It's important to identify and address the source of anxiety to ensure the pet's well-being.`,

    fearful: `The pet appears to be fearful. Here are the indicators:

**Facial Expression**: The eyes are wide open with dilated pupils, often darting around rapidly. You might notice whale eye, where the white of the eye is visible around the iris. The mouth is typically closed tightly, with possible tension in the jaw. Ears are flattened and pulled back close to the head.

**Body Language**: The body posture is lowered, with the pet trying to appear as small as possible. There may be visible trembling or shaking, particularly in the legs or body. The muscles are tense, especially around the face and shoulders.

These are classic signs of fear in pets. The dilated pupils and rapid eye movement indicate a state of high alertness, while the flattened ears and lowered body posture are attempts to appear non-threatening. The trembling is a physiological response to fear, preparing the body for potential flight. It's crucial to approach a fearful pet with caution and work on building trust and confidence to alleviate this state.`,

    curious: `The pet appears to be curious. Here are the indicators:

**Facial Expression**: The eyes are wide and alert, often with a soft, inquisitive gaze. Ears are typically perked up and may swivel to catch sounds. The head is often tilted slightly to one side, which is a classic sign of curiosity in many pets.

**Body Language**: The body posture is alert but not tense. There's often a slight leaning forward, indicating interest. You might notice the pet extending its neck to investigate something more closely. Movements are generally slow and deliberate.

Curiosity is a positive and engaging state for pets. The alert yet relaxed posture shows the pet is interested but not threatened. The head tilt is particularly indicative of curiosity, as it's a way for pets to adjust their hearing and visual perspective to gather more information. This state of mind is excellent for learning and positive interactions, showing a pet that's engaged with its environment in a healthy way.`,

    tired: `The pet appears to be tired. Here are the indicators:

**Facial Expression**: The eyes are often half-closed or blinking slowly. You might notice some pets yawning frequently. The overall facial muscles are relaxed, giving a somewhat droopy appearance, especially around the jowls or whisker area.

**Body Language**: The body posture is typically lowered, with a noticeable lack of energy in movements. Muscles are relaxed, and you might observe the pet stretching or shifting to find a cozy position. Some pets may exhibit slow, heavy breathing when very tired.

These signs are typical of a tired pet. The half-closed eyes and frequent yawning are clear indicators of fatigue. The relaxed muscles and lowered posture show that the pet is winding down and preparing for rest. While tiredness is a normal state, especially after physical activity or at certain times of day, it's important to ensure that excessive fatigue isn't a sign of an underlying health issue.`,

    playful: `The pet appears to be playful. Here are the indicators:

**Facial Expression**: The eyes are bright and alert, often with a soft, engaging gaze. The mouth is typically relaxed and may be slightly open in a "play face". Ears are usually perked up and oriented forward, showing keen interest and excitement.

**Body Language**: The overall body posture is loose and bouncy. You might notice quick, exaggerated movements, such as play bows (lowering the front of the body while keeping the rear elevated). The pet may be exhibiting invitation behaviors, such as pawing at the air or making small, excited movements.

These are classic signs of a playful mood in pets. The bright eyes and forward-oriented ears show engagement and excitement, while the relaxed mouth indicates a positive emotional state. The play bow, if present, is a universal sign of playfulness in many species. This state is crucial for both physical exercise and mental stimulation, and it's a great indicator of a pet's overall well-being and comfort in their environment.`,

    affectionate: `The pet appears to be affectionate. Here are the indicators:

**Facial Expression**: The eyes are soft and may be slightly squinted, often making direct but gentle eye contact. This is sometimes referred to as a "love gaze". The mouth is relaxed, and in some pets, you might notice a slight upward curve at the corners. Ears are typically in a neutral to slightly forward position.

**Body Language**: The body posture is relaxed and open. The pet may be leaning towards or seeking physical contact. You might observe gentle nuzzling or rubbing behaviors. The overall muscle tone is relaxed, and movements are typically slow and deliberate.

These signs clearly indicate an affectionate state. The soft eye contact is a sign of trust and bonding. The relaxed body posture and seeking of physical contact show that the pet feels secure and is actively trying to engage in a positive interaction. This state is crucial for the human-animal bond and is a good indicator of a pet that feels safe and loved in its environment.`,
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
