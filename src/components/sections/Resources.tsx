import React from 'react';
import Section from '../ui/Section';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { resources } from '../../data';

const Resources: React.FC = () => {
  return (
    <Section id="resources">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Resources & Insights</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          Educational content to help you make informed financial decisions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full mb-3">
                {resource.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{resource.description}</p>
            </CardContent>
            <CardFooter>
              <a 
                href={resource.link} 
                className="text-primary font-medium hover:underline"
              >
                Read More
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 bg-gray-100 rounded-xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Subscribe to Our Newsletter</h3>
          <p className="mt-3 text-gray-700 max-w-xl mx-auto">
            Stay updated with the latest market insights, financial tips, and investment strategies.
          </p>
          
          <form className="mt-6 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <label className="flex items-center justify-center">
                <input type="checkbox" className="mr-2" required />
                I agree to receive newsletters and marketing communications
              </label>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Resources;