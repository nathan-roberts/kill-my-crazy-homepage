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
          <div className="flex items-center gap-4">
            <span className="text-white text-sm tracking-[0.15em] font-bold">[ LOGO ]</span>
            {title && (
              <>
                <span className="text-white/60">/</span>
                <span className="text-white/90 text-sm tracking-[0.1em] font-medium">{title}</span>
              </>
            )}
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <nav className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/articles" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                      All Articles
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/relationships" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                      Relationships
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/personal-growth" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                      Personal Growth
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/communication" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors">
                      Communication
                    </a>
                  </li>
                </ul>

                <div className="mt-8">
                  <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Recent Posts</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/articles/sample-post-1" className="block group">
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          Understanding the Scripts That Control Our Relationships
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                      </a>
                    </li>
                    <li>
                      <a href="/articles/sample-post-2" className="block group">
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          Breaking Free from Drama Cycles
                        </p>
                        <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                      </a>
                    </li>
                    <li>
                      <a href="/articles/sample-post-3" className="block group">
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          The Power of Honest Communication
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2 weeks ago</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-3">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
