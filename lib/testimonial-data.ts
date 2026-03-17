import testimonialJson from '@/data/global-components/testimonial/testimonial.json';
import type { TestimonialData } from '@/types/global-components';

export function getTestimonialData(): TestimonialData {
  return testimonialJson as TestimonialData;
}
