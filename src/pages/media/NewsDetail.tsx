/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { SCHOOL_DATA } from '@/src/data/schoolData';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Tag, Share2, Printer } from 'lucide-react';
import { formatDate } from '@/src/lib/utils';

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = SCHOOL_DATA.news?.find(item => item.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dps-off-white px-4">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-dps-text mb-4">News Not Found</h1>
          <p className="text-dps-muted mb-8">The news article you are looking for does not exist or has been moved.</p>
          <Link 
            to="/media/news" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-dps-green text-dps-white font-bold rounded-xl hover:bg-dps-green-dark transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Article Header Section */}
      <section className="relative pt-32 pb-0 bg-dps-green-dark overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dps-green rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-dps-green rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb / Back */}
          <div className="mb-12">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-dps-green-light/60 hover:text-dps-white transition-colors font-bold text-[10px] tracking-widest uppercase group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Campus Buzz
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 pb-12 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-dps-green text-dps-white text-[10px] font-bold tracking-widest uppercase rounded">
                    {newsItem.category}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-sm font-medium text-white/60">
                    {formatDate(newsItem.date)}
                  </span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dps-white mb-8 leading-[1.1] tracking-tight">
                  {newsItem.title}
                </h1>
                
                <p className="text-lg md:text-xl text-dps-white/70 leading-relaxed max-w-2xl font-medium">
                  {newsItem.excerpt}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              {/* Image is placed here but will bleed out of bottom or be a large card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 -mb-24 lg:-mb-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-dps-white aspect-[4/5] lg:aspect-[3/4]"
              >
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <div className="pt-32 md:pt-48 pb-12 border-b border-dps-border mb-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dps-green text-dps-white flex items-center justify-center font-bold text-xl shadow-lg">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest mb-0.5">Media Desk</span>
                  <span className="text-dps-text font-bold">DPS Nacharam</span>
                </div>
              </div>
              <div className="w-px h-10 bg-dps-border" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest mb-0.5">Reading Time</span>
                <span className="text-dps-text font-bold">4 MIN READ</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-dps-muted uppercase tracking-widest mr-2">Share Article</span>
              <button className="p-3 bg-dps-off-white rounded-xl text-dps-muted hover:text-dps-green hover:bg-dps-green-light transition-all border border-dps-border shadow-sm">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-3 bg-dps-off-white rounded-xl text-dps-muted hover:text-dps-green hover:bg-dps-green-light transition-all border border-dps-border shadow-sm">
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <article>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-dps-text prose-p:text-dps-muted prose-p:leading-relaxed prose-img:rounded-3xl prose-blockquote:border-l-dps-green prose-blockquote:bg-dps-green-light/30 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic">
                <p className="text-2xl font-serif text-dps-green mb-12 leading-relaxed">
                  {newsItem.excerpt}
                </p>
                
                <p>
                  At Delhi Public School Nacharam, we take immense pride in fostering an environment where excellence is not just a goal but a way of life. Our commitment to holistic education continues to bear fruit as we witness our students and faculty achieving new heights in various spheres of academic and co-curricular life.
                </p>

                <div className="my-12 rounded-3xl overflow-hidden shadow-lg border border-dps-border">
                   <img src={newsItem.image} alt="News feature" className="w-full object-cover" />
                </div>

                <h3>Innovating for the Future</h3>
                <p>
                  As we move forward into the new academic session, our focus remains on integrating global perspectives with traditional values. The recent developments on campus, including the inauguration of our new facilities and the success in various inter-school competitions, are a testament to the collective hard work of the DPS family.
                </p>
                
                <blockquote>
                  "Education is the most powerful weapon which you can use to change the world. At DPS, we are equipping our students with this very weapon, tempered with values and empathy."
                </blockquote>

                <p>
                  We thank our parents, teachers, and well-wishers for their unwavering support in our journey towards excellence. Stay tuned for more updates as we continue to strive, achieve, and inspire.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-dps-border flex flex-wrap gap-2">
                <span className="text-sm font-bold text-dps-text mr-4">Tags:</span>
                {['Education', 'Excellence', 'DPS Nacharam', newsItem.category].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-dps-off-white text-dps-muted text-xs font-bold rounded-full hover:bg-dps-green-light hover:text-dps-green transition-all cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Other News */}
              <div className="bg-dps-white rounded-3xl p-8 border border-dps-border shadow-md">
                <h4 className="font-serif text-xl text-dps-text mb-6 pb-4 border-b border-dps-border">More Recent News</h4>
                <div className="space-y-6">
                  {SCHOOL_DATA.news?.filter(item => item.id !== id).slice(0, 3).map(other => (
                    <Link key={other.id} to={`/media/news/${other.id}`} className="group block">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] font-bold text-dps-green uppercase tracking-wider mb-1">{other.category}</span>
                          <h5 className="text-sm font-bold text-dps-text group-hover:text-dps-green transition-colors line-clamp-2 leading-snug">
                            {other.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/media/news" className="mt-8 block text-center py-3 bg-dps-off-white text-dps-green font-bold rounded-xl hover:bg-dps-green-light transition-all text-sm">
                  View All News
                </Link>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-dps-green rounded-3xl p-8 text-dps-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h4 className="font-serif text-2xl mb-4 relative z-10">Have an Inquiry?</h4>
                <p className="text-dps-white/80 mb-8 relative z-10 text-sm leading-relaxed">
                  For more information regarding media releases or campus updates, please reach out to our media coordinator.
                </p>
                <Link to="/contact" className="block text-center py-4 bg-dps-white text-dps-green font-bold rounded-xl hover:bg-dps-off-white transition-all relative z-10">
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </main>
  );
}
