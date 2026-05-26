export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans relative">
      {/* HEADER - Transparent overlay */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between">
          <div className="mb-2">
            <span className="text-white text-sm tracking-[0.15em] font-bold">KILL MY CRAZY</span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">EPISODES</a>
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">ARTICLES</a>
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">ABOUT</a>
          </nav>

          <a href="#" className="px-5 py-2 bg-primary text-white text-xs tracking-[0.1em] font-bold hover:bg-white hover:text-primary transition-colors rounded-lg">
            SHARE YOUR STORY
          </a>
        </div>
      </header>

      {/* HERO SECTION - Full-width dark cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dark gradient background with atmospheric texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f1429] to-[#1a0a20]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-30" />

        {/* Atmospheric glow effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#9B002F]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-[1550px] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-primary text-xs tracking-[0.25em] font-bold">PODCAST</span>
              </div>
              <h1 className="mb-8 leading-[0.95] uppercase text-white text-6xl md:text-7xl font-black tracking-tight">
                EXPOSING THE NOISE
              </h1>
              <p className="text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-lg">
                Dedicated to exposing the scripts that break us down and make us crazy. We offer coffee table conversations where friends call each other out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="px-10 py-4 bg-[#9B002F] text-white text-xs tracking-[0.15em] font-bold hover:shadow-lg hover:shadow-[#9B002F]/30 transition-all rounded-lg text-center">
                  WATCH NOW
                </a>
                <a href="#" className="px-10 py-4 border-2 border-white/30 text-white text-xs tracking-[0.15em] font-bold hover:bg-white hover:text-[#0a0a1a] transition-all rounded-lg text-center">
                  RECORD YOUR TRUTH
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                {/* Circular glowing frame */}
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border-4 border-[#9B002F]/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9B002F]/20 via-purple-900/20 to-[#9B002F]/20" />
                  <img src="https://picsum.photos/seed/podcast-hero/600/750" alt="Podcast Visual" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                {/* Rim lighting effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9B002F]/40 to-purple-900/40 rounded-full blur-xl -z-10" />
                <div className="absolute -inset-2 bg-gradient-to-br from-[#9B002F]/30 to-[#9b002f]/30 rounded-full blur-lg -z-10" />
                {/* Glow orbs */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#9B002F]/40 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED / LATEST EPISODES */}
      <section className="px-6 py-24">
        <div className="max-w-[1550px] mx-auto">
          <div className="mb-16">
            <h2 className="mb-0 text-5xl uppercase">Latest Episodes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-card hover:border-primary transition-colors overflow-hidden rounded-lg">
                <div className="w-full h-64 overflow-hidden mb-6 relative group aspect-square">
                  <img src={`https://picsum.photos/seed/episode-${i}/600/600`} alt={`Episode ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#9B002F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold mb-3 uppercase">The Scripts That Break Us</h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">Mary Beth and Mallory dive deep into the unconscious patterns that keep us stuck in drama cycles.</p>
                  <a href="#" className="inline-block px-6 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-all rounded-full">
                    WATCH NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="px-6 py-28">
        <div className="max-w-[1550px] mx-auto">
          <div className="mb-16">
            <h2 className="mb-0 text-5xl uppercase">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="group bg-card hover:border-primary transition-colors overflow-hidden rounded-lg">
                <div className="w-full h-64 overflow-hidden mb-6 relative group aspect-square">
                  <img src={`https://picsum.photos/seed/article-${i}/600/600`} alt={`Article ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#9B002F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold mb-3 uppercase">Living in the Drama Zone</h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">How your brain scripts fights before they even happen—and what you can do about it.</p>
                  <a href="#" className="inline-block px-6 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-all rounded-full">
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTICIPATION */}
      <section className="px-6 py-24 bg-[#9B002F] relative overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative z-10 max-w-[1550px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <h2 className="mb-0 text-white">SHARE YOUR TRUTH</h2>
              </div>
              <p className="text-xl text-white/90 font-bold leading-relaxed mb-8">
                Join the conversation. Record your truth bomb or share your written story with the community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-8 py-3 bg-white text-[#9B002F] text-xs font-bold tracking-[0.1em] hover:bg-[#9B002F] hover:text-white border-2 border-white transition-colors rounded-lg">
                  RECORD YOUR TRUTH BOMB
                </a>
                <a href="#" className="px-8 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.1em] hover:bg-white hover:text-[#9B002F] transition-colors rounded-lg">
                  WRITE YOUR STORY
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 border-4 border-white rounded-full flex items-center justify-center bg-white/10">
                <span className="text-5xl">🎙️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="px-6 py-20">
        <div className="max-w-[1550px] mx-auto">
          <div className="mb-12">
            <h2 className="mb-0">MEET THE HOSTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
            {[
              { name: 'Mary Beth', tagline: 'Says the quiet part out loud', avatarId: 44 },
              { name: 'Mallory', tagline: 'Breaks barriers with kind clarity', avatarId: 45 }
            ].map((host, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 border-4 border-primary rounded-full mx-auto mb-6 overflow-hidden bg-card">
                  <img src={`https://i.pravatar.cc/300?img=${host.avatarId}`} alt={host.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{host.name}</h3>
                <p className="text-lg text-muted-foreground font-bold italic">{host.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16">
        <div className="max-w-[1550px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="mb-6">
                <span className="text-white text-sm tracking-[0.15em] font-bold">KILL MY CRAZY</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Coffee table conversations where friends call each other out.
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <div className="text-primary text-xs font-bold tracking-wider mb-4">SOCIAL</div>
                <div className="flex gap-3">
                  {['IG', 'TW', 'FB', 'YT'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-colors font-bold text-xs rounded-lg">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-primary text-xs font-bold tracking-wider mb-4">WATCH</div>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors font-bold">
                  YouTube
                </a>
              </div>

              <div>
                <div className="text-primary text-xs font-bold tracking-wider mb-4">CONTACT</div>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors font-bold">
                  hello@killmycrazy.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-xs font-bold">© 2026 KILL MY CRAZY PODCAST. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}