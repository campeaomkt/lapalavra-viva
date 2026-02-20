
export interface BookSummary {
  title: string;
  summary: string;
  image: string;
  highlights: string[];
}

export interface Testimony {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: string;
  image: string;
}
