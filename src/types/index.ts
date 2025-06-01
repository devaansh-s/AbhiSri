export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface CalculatorTool {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
}