/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface Author {
  id: string;
  name: string;
  role: string;
}

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
}

interface BlogCardProps {
  article: Article;
  index: number;
  key?: React.Key;
}

export default function BlogCard({ article, index }: BlogCardProps) {
  const initials = article.author.name.charAt(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-[#0F1117] rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)]"
      id={`blog-card-${index}`}
    >
      {/* Image Area - Tech Blueprint Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-[#151821]">
        <div 
          className="absolute inset-0 opacity-10 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Floating Category Tag */}
        <div className="absolute top-6 left-6 px-3 py-1 bg-orange-600/90 rounded-full">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white font-bold">
            {article.category}
          </span>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="w-6 h-6 text-orange-500 stroke-[2.5px]" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Meta Row */}
        <div className="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-wider text-white/40">
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span>{article.readTime}</span>
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl font-bold leading-tight mb-3 transition-colors duration-300 group-hover:text-orange-500">
          {article.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
          {article.excerpt}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-6" />

        {/* Author Block */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
            <span className="text-orange-500 font-bold text-sm uppercase">
              {initials}
            </span>
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-none mb-1">
              {article.author.name === 'a' ? 'Alex Chen' : article.author.name === 'b' ? 'Beatrix Vane' : 'Cyrus Moen'}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              {article.author.role}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
