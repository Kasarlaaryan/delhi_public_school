/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from '@/src/components/ui/Container';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  image?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, category, image, className }: PageHeaderProps) {
  return (
    <section className={cn("relative pt-40 pb-24 overflow-hidden bg-dps-green-dark", className)}>
      <div className="absolute inset-0 z-0 opacity-20">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dps-green to-dps-green-dark" />
        )}
      </div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category && (
            <span className="text-[10px] font-bold tracking-[0.3em] text-dps-green-light/60 uppercase block mb-4">
              {category}
            </span>
          )}
          <h1 className="font-serif text-5xl md:text-7xl text-dps-white mb-6 max-w-4xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-dps-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
