export interface PortfolioItem {
  content: string;
  images?: {
    additional: string[];
    cover: string;
  };
  links?: {
    demo?: string;
    github?: string;
    npm?: string;
  };
  tagline: string;
  title: string;
}
