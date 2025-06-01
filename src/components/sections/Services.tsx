import React from 'react';
import Section from '../ui/Section';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { services } from '../../data';
import { BarChart4, Briefcase, LineChart, PiggyBank, ScrollText, ShieldCheck, TrendingUp } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="h-6 w-6" />,
    Briefcase: <Briefcase className="h-6 w-6" />,
    BarChart4: <BarChart4 className="h-6 w-6" />,
    PiggyBank: <PiggyBank className="h-6 w-6" />,
    ScrollText: <ScrollText className="h-6 w-6" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6" />
  };
  
  return iconMap[iconName] || <TrendingUp className="h-6 w-6" />;
};

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          Comprehensive financial solutions tailored to meet your unique goals and needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="h-full flex flex-col">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700">{service.description}</p>
            </CardContent>
            <CardFooter>
              <a 
                href={`#${service.id}`} 
                className="text-primary font-medium hover:underline"
              >
                Learn More
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Personalized Financial Strategy</h3>
              <p className="mt-4 text-white/90">
                Every client receives a customized financial plan designed to meet their specific goals and circumstances. Schedule a consultation today to discover how we can help you achieve financial success.
              </p>
              <Button className="mt-6 bg-red hover:bg-gray-100 ">
                Schedule a Consultation
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Financial planning" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;