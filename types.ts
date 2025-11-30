export interface GuestRSVP {
  name: string;
  guests: number;
  status: 'attending' | 'not-attending';
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ProfileProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: SocialLink[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
