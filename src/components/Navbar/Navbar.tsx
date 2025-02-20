"use client"
import { useState, useEffect } from 'react';

import DesktopNavLinks from '../navlinks/DesktopNavlinks';
import MobileNavLinks from '../navlinks/MobileNavLinks';
import MobileMenuButton from '../navlinks/MobileMenuButton';
import { NAV_LINKS } from '@/constants';
import { Logo } from '../logo/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
  
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <nav className="bg-white shadow-lg relative z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Logo />
              <DesktopNavLinks links={NAV_LINKS} />
              <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
            </div>
          </div>
        </nav>
  
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
  
        <MobileNavLinks 
          links={NAV_LINKS} 
          isOpen={isOpen} 
          onLinkClick={() => setIsOpen(false)} 
        />
      </>
    );
  };
  

export default Navbar;