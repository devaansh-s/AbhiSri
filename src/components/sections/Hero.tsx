import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 z-0"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-100 clip-path-hero z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Building Wealth Through <span className="text-primary">Personalized</span> Financial Strategy
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Expert investment guidance tailored to your goals. We help you navigate the complex financial landscape to secure your future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Financial advisor meeting with clients" 
                className="rounded-xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;