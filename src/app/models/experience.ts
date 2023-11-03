export interface Experience {
  company: string;
  title: string;
  employed: {
    start: string;
    end?: string;
  }
  website: string;
  description: string;
}
