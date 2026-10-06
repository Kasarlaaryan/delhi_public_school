/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA, NewsItem } from '@/src/data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, Tag, Search, Filter } from 'lucide-react';
import { formatDate } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems = SCHOOL_DATA.news || [];
  const categories = ['All', ...new Set(newsItems.map(item => item.category))];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems[0];
  const otherNews = filteredNews.filter(item => item.id !== (activeCategory === 'All' && !searchQuery ? featuredNews?.id : null));

  return (
    <main className="bg-dps-off-white min-h-screen pb-24">
      <PageHeader 
        title="Campus News" 
        subtitle="Stay updated with the latest happenings, achievements, and announcements from Delhi Public School Nacharam."
        category="MEDIA & UPDATES"
        image="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="-mt-8 relative z-20">
        {/* Search and Filter Bar */}
        <div className="bg-dps-white rounded-2xl shadow-xl p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border border-dps-border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dps-muted" />
            <input 
              type="text" 
              placeholder="Search news articles..." 
              className="w-full pl-12 pr-4 py-3 bg-dps-off-white border border-dps-border rounded-xl focus:outline-none focus:ring-2 focus:ring-dps-green/20 focus:border-dps-green transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter className="w-4 h-4 text-dps-muted mr-2 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category 
                    ? 'bg-dps-green text-dps-white shadow-md' 
                    : 'bg-dps-off-white text-dps-muted hover:bg-dps-green-light hover:text-dps-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News - Only show if no search/filter or if it matches */}
        {activeCategory === 'All' && !searchQuery && featuredNews && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Link to={`/media/news/${featuredNews.id}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden bg-dps-white shadow-xl border border-dps-border">
                <div className="relative h-[300px] lg:h-auto overflow-hidden">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-dps-green text-dps-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                      Featured Story
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-dps-muted text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredNews.date)}
                    </div>
                    <div className="flex items-center gap-2 text-dps-green text-sm font-bold uppercase tracking-wider">
                      <Tag className="w-4 h-4" />
                      {featuredNews.category}
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-dps-text mb-6 group-hover:text-dps-green transition-colors leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-dps-muted text-lg mb-8 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-dps-green font-bold group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {otherNews.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/media/news/${item.id}`} className="group flex flex-col h-full bg-dps-white rounded-3xl overflow-hidden shadow-md border border-dps-border hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-dps-white/90 backdrop-blur-sm text-dps-green text-[10px] font-bold tracking-wider uppercase rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-dps-muted text-xs mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="font-serif text-xl text-dps-text mb-3 group-hover:text-dps-green transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-dps-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-dps-green text-sm font-bold group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-dps-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-dps-green opacity-50" />
            </div>
            <h3 className="text-2xl font-serif text-dps-text mb-2">No news found</h3>
            <p className="text-dps-muted">We couldn't find any news articles matching your search criteria.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-8 text-dps-green font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-dps-green-dark rounded-[40px] p-8 md:p-16 relative overflow-hidden text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dps-green opacity-10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-dps-green opacity-10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-dps-white mb-6">Never Miss an Update</h2>
            <p className="text-dps-white/70 text-lg mb-10 leading-relaxed">
              Subscribe to our monthly newsletter to get the latest campus news, events, and academic highlights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-dps-green transition-all"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-dps-green text-dps-white font-bold rounded-xl hover:bg-dps-green-dark border border-dps-green transition-all shadow-lg active:scale-95"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-xs text-dps-white/40">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </motion.section>
      </Container>
    </main>
  );
}
