export interface BlogBody {
  section: number;
  type: string;
  text?: string;
  url?: string;
  items?: {
    title: string;
    body: string;
  }[],
  imageCaption?: string;
}

export interface Blog {
  id: string;
  title: string;
  body: BlogBody[];
  author: User;
  date: Date;
}

export interface User {
  name: string;
  job: string;
  description: string;
  image: string;
  contact: string;
}

export interface Formation {
  formation_id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image_url: string;
  lessons?: Array<string>;
}

export interface DevisInputs {
  formation: string;
  entreprise: string;
  fullname: string;
  telephone: string;
  email: string;
  message: string;
}

export interface DevisPayload {
  formation: string;
  price: number;
  duration: string;
  entreprise: string;
  fullname: string;
  telephone: string;
  email: string;
  message: string;
  date: Date;
}

export interface ContactUsPayload {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  message: string;
}