import { NavLink } from "./types/nav";
import { Feature } from "./types/quize";
import { Category } from "./types/quize";

export const NAV_LINKS: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    // { href: '/services', label: 'Services' },
    // { href: '/contact', label: 'Contact' },
  ];


  export const FEATURES: Feature[] = [
    {
      title: 'Track Progress',
      description: 'Monitor your performance and see improvement over time'
    },
    {
      title: 'Various Topics',
      description: 'Choose from a wide range of subjects and difficulty levels'
    },
    {
      title: 'Instant Results',
      description: 'Get immediate feedback and detailed explanations'
    }
  ];
  
  export const CATEGORIES: Category[] = [
    { name: 'General Knowledge', description: 'Test your knowledge in general knowledge' },
    { name: 'Science', description: 'Test your knowledge in science' },
    { name: 'History', description: 'Test your knowledge in history' },
    { name: 'Geography', description: 'Test your knowledge in geography' },
    { name: 'Sports', description: 'Test your knowledge in sports' },
    { name: 'Technology', description: 'Test your knowledge in technology' }
  ];