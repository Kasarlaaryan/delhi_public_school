/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA, GalleryAlbum } from '@/src/data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Camera, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '@/src/lib/utils';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const albums = (SCHOOL_DATA as any).galleryAlbums || [];
  const categories = ['All', ...new Set(albums.map((item: GalleryAlbum) => item.category))];

  const filteredAlbums = albums.filter((item: GalleryAlbum) => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main className="bg-dps-off-white min-h-screen pb-24">
      <PageHeader 
        title="Visual Journey" 
        subtitle="Explore our vibrant campus life, historic events, and state-of-the-art facilities through our curated photo albums."
        category="PHOTO GALLERY"
        image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 mr-4 text-dps-muted">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category as string}
              onClick={() => setActiveCategory(category as string)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === category 
                  ? 'bg-dps-green text-dps-white shadow-lg scale-105' 
                  : 'bg-dps-white text-dps-muted hover:bg-dps-green-light hover:text-dps-green border border-dps-border'
              }`}
            >
              {category as string}
            </button>
          ))}
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAlbums.map((album: GalleryAlbum, index: number) => (
              <motion.div
                key={album.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/media/gallery/${album.id}`} className="group block h-full bg-dps-white rounded-[32px] overflow-hidden shadow-md border border-dps-border hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={album.coverImage} 
                      alt={album.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-dps-green text-dps-white text-[10px] font-bold tracking-widest uppercase rounded shadow-lg">
                        {album.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="px-4 py-2 bg-dps-white/90 backdrop-blur-md rounded-full inline-flex items-center gap-2 text-dps-green text-[10px] font-bold">
                         <Camera className="w-3 h-3" />
                         {album.images.length} PHOTOS
                       </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-dps-muted text-xs mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(album.date)}
                    </div>
                    <h3 className="font-serif text-2xl text-dps-text mb-4 group-hover:text-dps-green transition-colors leading-tight">
                      {album.title}
                    </h3>
                    <p className="text-dps-muted text-sm mb-8 line-clamp-2 leading-relaxed">
                      {album.description}
                    </p>
                    <div className="flex items-center gap-2 text-dps-green text-sm font-bold group-hover:gap-4 transition-all">
                      View Album <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAlbums.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 bg-dps-green-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-dps-green opacity-30" />
            </div>
            <h3 className="font-serif text-3xl text-dps-text mb-4">No albums found</h3>
            <p className="text-dps-muted">We haven't added any albums to this category yet. Please check back later.</p>
          </div>
        )}
      </Container>
    </main>
  );
}
