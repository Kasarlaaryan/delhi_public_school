/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Container } from '@/src/components/ui/Container';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  {
    label: 'ABOUT',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Holistic Approach', href: '/about/holistic-approach' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Collaborations', href: '/about/collaborations' },
      { label: 'Branches', href: '/about/branches' },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '/academics',
    children: [
      { label: 'CBSE', href: '/academics/cbse' },
      { label: 'Cambridge International', href: '/academics/cambridge' },
      { label: 'IBDP', href: '/academics/ibdp' },
      { label: 'Early Years', href: '/academics/early-years' },
      { label: 'NIOS', href: '/academics/nios' },
      { label: 'Coaching & Career', href: '/academics/coaching' },
    ],
  },
  {
    label: 'CAMPUS LIFE',
    href: '/campus-life',
    children: [
      { label: 'Facilities', href: '/campus-life/facilities' },
      { label: 'Sports', href: '/campus-life/sports' },
      { label: 'Arts & Culture', href: '/campus-life/arts-culture' },
      { label: 'Clubs', href: '/campus-life/clubs' },
      { label: 'Residential Campus', href: '/campus-life/hostel' },
      { label: 'Student Wellbeing', href: '/campus-life/student-wellbeing' },
    ],
  },
  {
    label: 'STUDENT LIFE',
    href: '/student-life',
    children: [
      { label: 'Events', href: '/student-life/events' },
      { label: 'Activities', href: '/student-life/activities' },
      { label: 'Achievements', href: '/student-life/achievements' },
      { label: 'Community Outreach', href: '/student-life/community' },
    ],
  },
  {
    label: 'ADMISSIONS',
    href: '/admissions',
    children: [
      { label: 'Admission Process', href: '/admissions/process' },
      { label: 'Scholarships', href: '/admissions/scholarships' },
      { label: 'Admission Team', href: '/admissions/team' },
      { label: 'FAQ\'s', href: '/admissions/faqs' },
      { label: 'Schedule a session', href: '/admissions/schedule' },
      { label: 'Board Results', href: '/admissions/results' },
      { label: 'Prospectus', href: '/admissions/prospectus' },
      { label: 'Fee Structure', href: '/admissions/fees' },
      { label: 'Apply Now', href: '/admissions/apply' },
      { label: 'Enquiry', href: '/admissions/enquiry' },
    ],
  },
  {
    label: 'MEDIA',
    href: '/media',
    children: [
      { label: 'Gallery', href: '/media/gallery' },
      { label: 'Videos', href: '/media/videos' },
      { label: 'Testimonials', href: '/media/testimonials' },
      { label: 'Campus Buzz', href: '/media/news' },
    ],
  },
  {
    label: 'ALUMNI',
    href: '/alumni',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      {/* Utility Bar */}
      {!isScrolled && (
        <div className="bg-dps-green-dark/10 backdrop-blur-sm border-b border-dps-white/10 py-1 hidden lg:block">
          <Container className="flex justify-end gap-6 text-[10px] tracking-widest font-medium text-white/80">
            <Link to="/admissions/apply" className="hover:text-white transition-colors">APPLY NOW</Link>
            <a href="#" className="hover:text-white transition-colors">PARENT PORTAL</a>
            <a href="#" className="hover:text-white transition-colors">STUDENT PORTAL</a>
            <Link to="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </Container>
        </div>
      )}

      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            isScrolled ? "bg-dps-green" : "bg-dps-white/90 shadow-lg"
          )}>
            <span className={cn(
              "font-serif font-bold text-lg",
              isScrolled ? "text-dps-white" : "text-dps-green"
            )}>D</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold tracking-tighter leading-none transition-colors",
              isScrolled ? "text-dps-green-dark" : "text-dps-white text-xl"
            )}>
              DPS NACHARAM
            </span>
            {!isScrolled && (
              <span className="text-[8px] tracking-[0.2em] text-white/70 font-medium uppercase mt-0.5">
                DELHI PUBLIC SCHOOL
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => setActiveMegaMenu(item.label)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  'text-[11px] font-bold tracking-widest transition-colors flex items-center gap-1',
                  isScrolled ? 'text-dps-text hover:text-dps-green' : 'text-dps-white/90 hover:text-dps-white'
                )}
              >
                {item.label}
                <ChevronDown className="w-3 h-3 opacity-50" />
              </Link>

              {/* Mega Menu Placeholder */}
              <AnimatePresence>
                {activeMegaMenu === item.label && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-dps-white shadow-xl border border-dps-green-light rounded-lg overflow-hidden py-4 px-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-xs text-dps-text hover:bg-dps-green-light hover:text-dps-green rounded transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled ? "text-dps-text hover:bg-dps-green-light" : "text-dps-white hover:bg-dps-white/10"
          )}>
            <Search className="w-5 h-5" />
          </button>
          
          <Link
            to="/admissions/apply"
            className={cn(
              "hidden md:block px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest transition-all",
              isScrolled 
                ? "bg-dps-green text-dps-white hover:bg-dps-green-dark" 
                : "bg-dps-white text-dps-green hover:bg-dps-green-light"
            )}
          >
            APPLY NOW
          </Link>

          <button
            className={cn("lg:hidden p-2", isScrolled ? "text-dps-green-dark" : "text-dps-white")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-white z-[60] lg:hidden overflow-y-auto"
          >
            <div className="p-6 flex justify-between items-center border-b border-dps-green-light">
              <span className="font-serif font-bold text-dps-green">DPS NACHARAM</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-dps-text" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-4">
                  <Link
                    to={item.href}
                    className="text-lg font-serif font-bold text-dps-green-dark border-l-4 border-dps-green pl-4"
                  >
                    {item.label}
                  </Link>
                  <div className="grid grid-cols-1 gap-3 pl-8">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="text-sm text-dps-text hover:text-dps-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-dps-green-light flex flex-col gap-4">
                <Link to="/admissions/apply" className="w-full bg-dps-green text-dps-white text-center py-4 rounded-lg font-bold">
                  APPLY NOW
                </Link>
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-dps-text/40 hover:text-dps-green"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
