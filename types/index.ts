export interface NavItem {
    label: string;
    href: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

export interface Testimonial {
    name: string;
    text: string;
}

export interface EmotionResult {
    emotion: string;
    confidence: number;
}
