/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  Music, 
  Globe, 
  Shield, 
  Mic2, 
  Heart, 
  Rocket,
  Search,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const clubs = [
  {
    id: "tech-wizards",
    title: "Tech Wizards",
    category: "Technology",
    description: "Exploring the world of coding, robotics, and artificial intelligence through hands-on projects.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    memberCount: "45"
  },
  {
    id: "debate-society",
    title: "Debating Society",
    category: "Literary",
    description: "Developing critical thinking and public speaking skills through inter-school debate competitions.",
    icon: Mic2,
    image: "https://images.unsplash.com/photo-1475721027785-f74dea97794d?q=80&w=800&auto=format&fit=crop",
    memberCount: "32"
  },
  {
    id: "eco-club",
    title: "Eco Club",
    category: "Environment",
    description: "Student-led initiatives for a greener campus and community sustainability awareness.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=800&auto=format&fit=crop",
    memberCount: "60"
  },
  {
    id: "mun-club",
    title: "DPS MUN",
    category: "Academic",
    description: "Simulating United Nations conferences to foster diplomacy and global awareness.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1517048676732-d676adc9ea4a?q=80&w=800&auto=format&fit=crop",
    memberCount: "55"
  },
  {
    id: "arts-guild",
    title: "Fine Arts Guild",
    category: "Creative",
    description: "A platform for visual artists to experiment with painting, sculpture, and digital art.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
    memberCount: "40"
  },
  {
    id: "rhythm-beats",
    title: "Rhythm & Beats",
    category: "Performing Arts",
    description: "Our school's official music and dance club, performing at all major institutional events.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?q=80&w=800&auto=format&fit=crop",
    memberCount: "75"
  }
];

export default function Clubs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClubs = clubs.filter(club => 
    club.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <PageHeader 
        title="Student Clubs" 
        subtitle="Explore our vibrant ecosystem of student-led initiatives where passion meets purpose."
        category="CAMPUS LIFE"
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="py-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl text-dps-green-dark mb-4">Discover Your Passion</h2>
              <p className="text-lg text-dps-muted">Join one of our {clubs.length} active clubs and collaborate with fellow students on projects that make a difference.</p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-dps-muted" />
              <input 
                type="text" 
                placeholder="Search by name or category..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-5 rounded-[20px] border border-dps-border focus:outline-none focus:ring-2 focus:ring-dps-green/20 transition-all text-base bg-dps-off-white text-dps-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClubs.map((club, idx) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[32px] border border-dps-border overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={club.image} 
                    alt={club.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <Users size={14} className="text-dps-green" />
                    <span className="text-xs font-bold text-dps-green-dark">{club.memberCount} Members</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dps-green-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-dps-green-light text-dps-green flex items-center justify-center">
                      <club.icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-dps-green uppercase">{club.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-dps-green-dark mb-4 group-hover:text-dps-green transition-colors">{club.title}</h3>
                  <p className="text-dps-muted text-sm leading-relaxed mb-8">
                    {club.description}
                  </p>
                  <button className="w-full py-4 bg-dps-off-white text-dps-green-dark rounded-2xl font-bold hover:bg-dps-green hover:text-white transition-all flex items-center justify-center gap-2">
                    Join this Club <Rocket size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredClubs.length === 0 && (
            <div className="py-32 text-center">
              <div className="w-20 h-20 bg-dps-off-white rounded-full flex items-center justify-center text-dps-muted mx-auto mb-6">
                <Search size={32} />
              </div>
              <h3 className="font-serif text-2xl text-dps-green-dark mb-2">No clubs found</h3>
              <p className="text-dps-muted">Try adjusting your search query or browse all categories.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Start a Club Section */}
      <section className="py-24 bg-dps-green-dark text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        <Container className="relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 max-w-3xl mx-auto text-[#ffffff]">Don't see a club for you?</h2>
          <p className="text-dps-white/70 text-lg mb-12 max-w-2xl mx-auto">
            We encourage student leadership. If you have a passion that isn't represented, you can apply to start your own club with a faculty mentor.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-dps-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-dps-green-dark transition-all">
              Apply to Start a Club
            </button>
            <button className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Club Guidelines
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}
