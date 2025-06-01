import React from 'react';
import Section from '../ui/Section';
import { testimonials } from '../../data';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Testimonials</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          What our clients say about our financial advisory services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <svg className="h-12 w-12 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="text-primary font-medium hover:underline">
          Become our next success story. Contact us today.
        </a>
      </div>
    </Section>
  );
};

export default Testimonials;