/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import BlogCard from "./BlogCard";

const BLOG_DATA = [
  {
    title: "The Rise of Agentic AI: Beyond Simple Chatbots",
    excerpt: "Exploring how autonomous agents are redefining software architecture and user interaction in the modern enterprise.",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Agentic AI",
    author: { id: "a", name: "a", role: "Lead Architect" }
  },
  {
    title: "Next.js at the Edge: Revolutionizing Performance",
    excerpt: "Leveraging Vercel Edge Functions to deliver dynamic content at lightning speed, regardless of user location.",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    category: "Web Engineering",
    author: { id: "b", name: "b", role: "Edge Specialist" }
  },
  {
    title: "AI-Driven Growth: Scaling with Intelligence",
    excerpt: "How intelligent automation and machine learning models are accelerating startup growth cycles in 2024.",
    date: "Apr 15, 2024",
    readTime: "10 min read",
    category: "AI Growth",
    author: { id: "c", name: "c", role: "Product Strategy" }
  }
];

export default function Blogs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#05050A]" id="blogs-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">
                Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
              Thoughts from the Edge
            </h2>
          </div>
          
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-white/50 border-b border-white/10 pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors"
          >
            View All Articles
          </motion.a>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((article, index) => (
            <BlogCard key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
