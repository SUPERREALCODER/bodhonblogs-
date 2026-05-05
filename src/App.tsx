/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Blogs from "./components/Blogs";

export default function App() {
  return (
    <main className="min-h-screen bg-[#05050A] text-white selection:bg-orange-500/30 selection:text-orange-500" id="app-container">
      {/* 
        This is a demo layout. In a full site, we'd have a Hero and Navbar above this.
        The Blogs component is the focus of this task.
      */}
      <Blogs />
      
      {/* Footer Placeholder for visual balance */}
      <footer className="py-24 border-t border-white/5 flex flex-col items-center justify-center gap-6 opacity-30">
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">
          Bodhon © 2026
        </div>
        <div className="flex gap-4">
            <div className="w-1 h-1 rounded-full bg-white/50" />
            <div className="w-1 h-1 rounded-full bg-white/50" />
            <div className="w-1 h-1 rounded-full bg-white/50" />
        </div>
      </footer>
    </main>
  );
}
