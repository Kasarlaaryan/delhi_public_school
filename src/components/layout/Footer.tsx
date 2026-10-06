/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dps-green-dark text-dps-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-dps-white flex items-center justify-center">
                <span className="font-serif font-bold text-dps-green text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight leading-none">
                  DPS NACHARAM
                </span>
                <span className="text-[10px] tracking-widest opacity-60 uppercase mt-1">
                  Delhi Public School
                </span>
              </div>
            </Link>
            <p className="text-sm text-dps-white/70 leading-relaxed max-w-xs">
              Preparing students for a changing world through academic excellence, global education, and holistic development.
            </p>
            <div className="flex gap-4">
              <a href={SCHOOL_DATA.socials.instagram} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-dps-white/80">Academics</h4>
            <ul className="flex flex-col gap-3 text-sm text-dps-white/60">
              <li><Link to="/academics/cbse" className="hover:text-dps-white transition-colors">CBSE Curriculum</Link></li>
              <li><Link to="/academics/cambridge" className="hover:text-dps-white transition-colors">Cambridge International</Link></li>
              <li><Link to="/academics/ibdp" className="hover:text-dps-white transition-colors">IB Diploma Programme</Link></li>
              <li><Link to="/academics/early-years" className="hover:text-dps-white transition-colors">Early Years Program</Link></li>
              <li><Link to="/academics/nios" className="hover:text-dps-white transition-colors">NIOS Pathway</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-dps-white/80">Admissions</h4>
            <ul className="flex flex-col gap-3 text-sm text-dps-white/60">
              <li><Link to="/admissions/process" className="hover:text-dps-white transition-colors">Admission Process</Link></li>
              <li><Link to="/admissions/fees" className="hover:text-dps-white transition-colors">Fee Structure</Link></li>
              <li><Link to="/admissions/scholarships" className="hover:text-dps-white transition-colors">Scholarships</Link></li>
              <li><Link to="/admissions/results" className="hover:text-dps-white transition-colors">Board Results</Link></li>
              <li><Link to="/admissions/faqs" className="hover:text-dps-white transition-colors">FAQ's</Link></li>
              <li><Link to="/admissions/apply" className="hover:text-dps-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-dps-white/80">Contact Info</h4>
            <div className="flex flex-col gap-4 text-sm text-dps-white/60">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-dps-green-light/40" />
                <address className="not-italic leading-relaxed">
                  {SCHOOL_DATA.address}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-dps-green-light/40" />
                <span>{SCHOOL_DATA.phone[0]} / {SCHOOL_DATA.phone[1]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-dps-green-light/40" />
                <span>{SCHOOL_DATA.email[0]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-dps-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-dps-white/50">
            © {currentYear} Delhi Public School Nacharam. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-medium tracking-widest text-dps-white/50 uppercase">
            <Link to="/privacy-policy" className="hover:text-dps-white transition-colors">Privacy Policy</Link>
            <span className="text-dps-white/20">|</span>
            <span>weblend digitals</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
