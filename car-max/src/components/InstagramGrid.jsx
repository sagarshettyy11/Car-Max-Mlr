import React from 'react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/carmaxData';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function InstagramGrid() {
  return (
    <section className="py-20 bg-[#090a0d] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              FOLLOW OUR WORKSHOP STORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              @CARMAX_<span className="orange-gradient-text">MANGALORE</span> ON INSTAGRAM
            </h2>
          </div>

          <a
            href={BRAND_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-[#ff5500]/40 transition-all self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 shadow-xl block"
            >
              <img
                src={post.imageUrl}
                alt="CARMAX Instagram Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between backdrop-blur-sm">
                <div className="flex items-center gap-4 text-white text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-[#ff5500]">
                    <Heart className="w-4 h-4 fill-[#ff5500]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>

                <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed font-light">
                  {post.caption}
                </p>

                <div className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500] font-bold flex items-center gap-1">
                  <span>View Post on Instagram</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
