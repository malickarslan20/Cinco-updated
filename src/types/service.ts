export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  src: string;
  details?: {
    overview: string;
    keyFeatures: string[];
    technologies: string[];
    deliveryTime: string;
    projectsCompleted: number;
    clientTestimonial: string;
    useCases: string[];
  };
}