import React from 'react';
import Section from '../ui/Section';
import { statistics, team } from '../../data';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About AbhiSri Financial Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          Empowering clients to achieve financial freedom through expert guidance and personalized strategies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            At AbhiSri Financial Services, we are committed to providing exceptional financial guidance that empowers our clients to achieve their financial goals. We believe in building long-term relationships based on trust, transparency, and personalized service.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">1</div>
              <div>
                <span className="font-semibold text-gray-900">Integrity</span>
                <p className="text-gray-700">We maintain the highest ethical standards in all our dealings.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">2</div>
              <div>
                <span className="font-semibold text-gray-900">Excellence</span>
                <p className="text-gray-700">We strive for excellence in our services and client outcomes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5">3</div>
              <div>
                <span className="font-semibold text-gray-900">Client-Focused</span>
                <p className="text-gray-700">Our clients' best interests are at the heart of everything we do.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full z-0"></div>
            <img 
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Financial planning meeting" 
              className="rounded-xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary font-medium">{member.position}</p>
                <p className="mt-4 text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg shadow-md p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-gray-900">Professional Certifications</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700">Certified Financial Planner (CFP)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700">Chartered Financial Analyst (CFA)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700">Registered Investment Advisor (RIA)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-gray-700">SEBI Registered Investment Advisor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;