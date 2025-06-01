import { Service, Testimonial, Statistic, TeamMember, CalculatorTool, Resource, NavItem } from '../types';
import { BarChart4, Calculator, LineChart, ShieldCheck, Briefcase, PiggyBank, ScrollText, TrendingUp } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Resources', href: '#resources' },
  { title: 'Tools', href: '#tools' },
  { title: 'Contact', href: '#contact' }
];

export const services: Service[] = [
  {
    id: 'investment-planning',
    title: 'Investment Planning',
    description: 'Strategic investment planning tailored to your financial goals and risk tolerance.',
    icon: 'TrendingUp'
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    description: 'Comprehensive wealth management solutions to preserve and grow your assets.',
    icon: 'Briefcase'
  },
  {
    id: 'portfolio-optimization',
    title: 'Portfolio Optimization',
    description: 'Data-driven portfolio analysis and optimization for maximum returns.',
    icon: 'BarChart4'
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Secure your future with customized retirement planning strategies.',
    icon: 'PiggyBank'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Minimize tax liabilities with strategic financial planning and investment choices.',
    icon: 'ScrollText'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Protect your wealth with comprehensive risk assessment and management.',
    icon: 'ShieldCheck'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajiv Mehta',
    position: 'CEO',
    company: 'Innovate Technologies',
    content: 'AbhiSri Financial Services transformed our company\'s financial strategy. Their expertise in investment planning has significantly improved our returns while reducing risk.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    position: 'Director',
    company: 'Global Ventures',
    content: 'I\'ve been working with Abhinav for over 5 years, and his financial guidance has been instrumental in securing my retirement and growing my personal wealth.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    position: 'Entrepreneur',
    company: 'Singh Enterprises',
    content: 'The personalized approach and attention to detail at AbhiSri Financial Services sets them apart. Their tax planning strategies have saved our business substantial amounts.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const statistics: Statistic[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '₹500Cr+', label: 'Assets Under Management' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '500+', label: 'Happy Clients' }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Abhinav Srivastava',
    position: 'Founder & Principal Advisor',
    bio: 'With over 15 years of experience in financial services, Abhinav has helped hundreds of clients achieve their financial goals through strategic planning and investment guidance.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const calculatorTools: CalculatorTool[] = [
  {
    id: 'sip-calculator',
    title: 'SIP Calculator',
    description: 'Calculate the future value of your Systematic Investment Plan.',
    icon: 'Calculator'
  },
  {
    id: 'retirement-calculator',
    title: 'Retirement Calculator',
    description: 'Plan your retirement by calculating how much you need to save.',
    icon: 'PiggyBank'
  },
  {
    id: 'tax-calculator',
    title: 'Tax Calculator',
    description: 'Estimate your income tax liability based on your financial situation.',
    icon: 'ScrollText'
  },
  {
    id: 'investment-growth',
    title: 'Investment Growth',
    description: 'Visualize the potential growth of your investments over time.',
    icon: 'LineChart'
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Market Volatility',
    description: 'A comprehensive guide to navigating market ups and downs.',
    category: 'Investing',
    link: '#'
  },
  {
    id: '2',
    title: 'Retirement Planning Essentials',
    description: 'Key strategies for a secure and comfortable retirement.',
    category: 'Planning',
    link: '#'
  },
  {
    id: '3',
    title: 'Tax-Efficient Investment Strategies',
    description: 'Maximize your returns by minimizing tax impact.',
    category: 'Tax',
    link: '#'
  },
  {
    id: '4',
    title: 'Estate Planning 101',
    description: 'Protecting your legacy and ensuring your wishes are honored.',
    category: 'Planning',
    link: '#'
  }
];