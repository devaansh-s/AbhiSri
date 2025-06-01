import React from 'react';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Secure Your Financial Future?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Schedule a consultation with our financial experts and take the first step towards achieving your financial goals.
        </p>
        <div className="flex justify-center">
          <Button href="#contact" className="bg-red text-red hover:bg-gray-100 text-lg py-3 px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;