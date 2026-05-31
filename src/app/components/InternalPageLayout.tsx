import React from 'react';

interface InternalPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  onNavigateHome?: () => void;
}

export default function InternalPageLayout({ children, title, onNavigateHome }: InternalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#13294B] to-[#1e3a5f]" style={{fontFamily: '"Montserrat", sans-serif'}}>
      {/* Dark background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-30" />
      
      {/* HEADER - Dark cinematic matching homepage */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between">
          <div className="mb-2">
            <span className="text-white text-sm tracking-[0.15em] font-bold">[ LOGO ]</span>
          </div>

          <nav className="flex gap-8">
            <button onClick={onNavigateHome} className="text-white text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors bg-transparent border-none cursor-pointer">HOME</button>
            <button className="text-white text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors bg-transparent border-none cursor-pointer">EPISODES</button>
            <button className="text-[#9B002F] text-xs tracking-[0.1em] font-bold bg-transparent border-none cursor-pointer">ARTICLES</button>
            <button className="text-white text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors bg-transparent border-none cursor-pointer">ABOUT</button>
          </nav>

          <button onClick={onNavigateHome} className="px-10 py-4 bg-white text-[#9B002F] text-xs tracking-[0.15em] font-bold hover:bg-[#9B002F] hover:text-white transition-colors">
            SHARE YOUR STORY
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 flex items-center">
        {/* Atmospheric glow effects */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#9B002F]/10 blur-2xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/20 blur-2xl" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-[#ff6b9d] text-xs tracking-[0.25em] font-bold">ARTICLES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-[0.95] uppercase tracking-tight">
            {title || 'Insights & Stories'}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Deep dives into the patterns that shape our relationships, practical wisdom for breaking free from drama cycles, and honest conversations about what it means to show up authentically.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <main>
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-8">
            {children}
          </div>
        </main>
      </div>
      
      {/* FOOTER */}
      <footer className="relative z-10 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
        <div className="max-w-[1550px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Tagline */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <span className="text-white text-sm tracking-[0.15em] font-bold">[ LOGO ]</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Coffee table conversations where friends call each other out.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white text-xs tracking-[0.15em] font-bold mb-4 uppercase">SOCIAL</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">IG</a>
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">TW</a>
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">FB</a>
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">YT</a>
              </div>
            </div>

            {/* Watch and Contact */}
            <div>
              <h3 className="text-white text-xs tracking-[0.15em] font-bold mb-4 uppercase">WATCH</h3>
              <div className="space-y-2 mb-4">
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors">YouTube</a>
              </div>
              
              <h3 className="text-white text-xs tracking-[0.15em] font-bold mb-2 uppercase">CONTACT</h3>
              <a href="mailto:hello@killmycrazy.com" className="block text-gray-300 text-sm hover:text-white transition-colors">
                hello@killmycrazy.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <p className="text-gray-400 text-xs text-center">
              © 2026 KILL MY CRAZY PODCAST. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
