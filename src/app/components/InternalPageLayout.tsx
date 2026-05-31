import React from 'react';

interface InternalPageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function InternalPageLayout({ children, title }: InternalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50" style={{fontFamily: '"Montserrat", sans-serif'}}>
      {/* HEADER - Light theme */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1550px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/" className="text-[#9B002F] text-sm tracking-[0.15em] font-bold hover:opacity-80 transition-opacity">
                [ LOGO ]
              </a>
              {title && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-600 text-sm tracking-[0.1em] font-medium">{title}</span>
                </>
              )}
            </div>

            <nav className="hidden md:flex gap-8">
              <a href="/" className="text-gray-600 text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors">HOME</a>
              <a href="/episodes" className="text-gray-600 text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors">EPISODES</a>
              <a href="/articles" className="text-[#9B002F] text-xs tracking-[0.1em] font-bold">ARTICLES</a>
              <a href="/about" className="text-gray-600 text-xs tracking-[0.1em] font-bold hover:text-[#9B002F] transition-colors">ABOUT</a>
            </nav>

            <a href="/" className="px-6 py-2 bg-[#9B002F] text-white text-xs tracking-[0.15em] font-bold hover:bg-[#800020] transition-colors">
              BACK TO HOME
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-[1550px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/articles" className="block px-3 py-2 text-sm text-gray-600 hover:text-[#9B002F] hover:bg-gray-50 rounded transition-colors">
                      All Articles
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/relationships" className="block px-3 py-2 text-sm text-gray-600 hover:text-[#9B002F] hover:bg-gray-50 rounded transition-colors">
                      Relationships
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/personal-growth" className="block px-3 py-2 text-sm text-gray-600 hover:text-[#9B002F] hover:bg-gray-50 rounded transition-colors">
                      Personal Growth
                    </a>
                  </li>
                  <li>
                    <a href="/articles/category/communication" className="block px-3 py-2 text-sm text-gray-600 hover:text-[#9B002F] hover:bg-gray-50 rounded transition-colors">
                      Communication
                    </a>
                  </li>
                </ul>

                <div className="mt-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Recent Posts</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/articles/sample-post-1" className="block group">
                        <p className="text-sm text-gray-600 group-hover:text-[#9B002F] transition-colors line-clamp-2">
                          Understanding the Scripts That Control Our Relationships
                        </p>
                        <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                      </a>
                    </li>
                    <li>
                      <a href="/articles/sample-post-2" className="block group">
                        <p className="text-sm text-gray-600 group-hover:text-[#9B002F] transition-colors line-clamp-2">
                          Breaking Free from Drama Cycles
                        </p>
                        <p className="text-xs text-gray-400 mt-1">1 week ago</p>
                      </a>
                    </li>
                    <li>
                      <a href="/articles/sample-post-3" className="block group">
                        <p className="text-sm text-gray-600 group-hover:text-[#9B002F] transition-colors line-clamp-2">
                          The Power of Honest Communication
                        </p>
                        <p className="text-xs text-gray-400 mt-1">2 weeks ago</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
