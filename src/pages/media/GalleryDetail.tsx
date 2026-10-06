/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { PageHeader } from '@/src/components/ui/PageHeader';
import { SCHOOL_DATA, GalleryAlbum, GalleryImage } from '@/src/data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Maximize2, Calendar, MapPin } from 'lucide-react';
import { formatDate } from '@/src/lib/utils';

export default function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const album = (SCHOOL_DATA as any).galleryAlbums?.find((a: GalleryAlbum) => a.id === id);

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dps-off-white px-4">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-dps-text mb-4">Album Not Found</h1>
          <p className="text-dps-muted mb-8">The gallery album you are looking for does not exist.</p>
          <Link 
            to="/media/gallery" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-dps-green text-dps-white font-bold rounded-xl hover:bg-dps-green-dark transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-dps-white min-h-screen pb-24">
      {/* Immersive Header */}
      <section className="relative pt-32 pb-48 bg-dps-green-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dps-green rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-dps-green rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <Container className="relative z-10">
          <div className="mb-12">
            <button 
              onClick={() => navigate('/media/gallery')}
              className="flex items-center gap-2 text-dps-green-light/60 hover:text-dps-white transition-colors font-bold text-[10px] tracking-widest uppercase group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Albums
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-dps-green text-dps-white text-[10px] font-bold tracking-widest uppercase rounded">
                {album.category}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm font-medium text-white/60">
                {formatDate(album.date)}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dps-white mb-8 leading-[1.1] tracking-tight">
              {album.title}
            </h1>
            
            <p className="text-lg md:text-xl text-dps-white/70 leading-relaxed max-w-2xl font-medium">
              {album.description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Grid Section */}
      <Container className="-mt-32 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.images.map((image: GalleryImage, index: number) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-[32px] overflow-hidden bg-dps-white shadow-xl border-4 border-dps-white cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.caption || album.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dps-green-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-dps-white/20 backdrop-blur-md flex items-center justify-center text-dps-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dps-green-dark/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-dps-white hover:text-dps-green-light transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption || album.title} 
                  className="w-full h-full object-contain bg-black/40"
                />
              </div>
              {selectedImage.caption && (
                <div className="mt-8 text-center text-dps-white max-w-2xl">
                  <p className="font-medium text-lg italic opacity-80">
                    "{selectedImage.caption}"
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
