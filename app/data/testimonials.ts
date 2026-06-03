export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mrs Gloria Morrison',
    role: 'Parent • IGCSE',
    quote:
      'My daughter moved from struggling in Maths to one of the top scorers in her IGCSE cohort. The mentoring is unmatched.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Mr. James Akpan',
    role: 'Parent • Secondary',
    quote:
      'From JSS to SSS, one trusted school made all the difference. Exam preparation was thorough and the mentoring culture is real.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Adaobi E.',
    role: 'Student • A-Level',
    quote:
      'The online tutorials kept me on track during busy terms. I felt supported every step of the way toward my university goals.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Mr. & Mrs. Udo',
    role: 'Parents • Primary',
    quote:
      'Small classes mean our son is seen and heard. We appreciate the transparent updates and the warmth of the Eket campus community.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb8f61?w=400&h=400&fit=crop',
  },
]
