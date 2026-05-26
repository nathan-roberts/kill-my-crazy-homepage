export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-secondary to-[#740021] px-6 py-5">
        <div className="max-w-[1160px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-primary" />
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

      {/* HERO SECTION */}
      <section className="border-b border-border px-6 py-32">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-7 pr-0 md:pr-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-primary" />
                <span className="text-primary text-xs tracking-[0.25em] font-bold">PODCAST</span>
              </div>
              <h1 className="mb-10 leading-[1.1] uppercase">
                EXPOSING THE NOISE
              </h1>
              <p className="text-2xl text-muted-foreground font-bold leading-relaxed mb-10 max-w-lg">
                Dedicated to exposing the scripts that break us down and make us crazy. We offer coffee table conversations where friends call each other out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="px-10 py-4 bg-primary text-white text-xs tracking-[0.15em] font-bold hover:bg-white hover:text-primary transition-colors rounded-lg text-center">
                  WATCH NOW
                </a>
                <a href="#" className="px-10 py-4 border-2 border-primary text-primary text-xs tracking-[0.15em] font-bold hover:bg-primary hover:text-white transition-colors rounded-lg text-center">
                  RECORD YOUR TRUTH
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-card border-2 border-border overflow-hidden rounded-lg">
                  <img src="https://picsum.photos/seed/podcast-hero/600/750" alt="Podcast Visual" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary opacity-20 rounded-full" />
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary opacity-30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED / LATEST EPISODES */}
      <section className="border-b border-border px-6 py-24">
        <div className="max-w-[1160px] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-2 h-16 bg-primary" />
            <h2 className="mb-0 text-5xl uppercase">Latest Episodes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group border-2 border-border bg-card hover:border-primary transition-colors rounded-lg overflow-hidden">
              <div className="w-full h-80 overflow-hidden mb-6">
                <img src="https://picsum.photos/seed/episode-1/800/450" alt="Episode 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="px-8 pb-8">
                <div className="mb-4">
                  <span className="text-primary text-xs font-bold tracking-wider">LATEST</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">The Scripts That Break Us</h3>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">Mary Beth and Mallory dive deep into the unconscious patterns that keep us stuck in drama cycles. This episode explores how we unknowingly participate in our own suffering.</p>
                <a href="#" className="inline-block px-8 py-3 bg-primary text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-colors rounded-lg">
                  WATCH NOW
                </a>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              {[2, 3].map((i) => (
                <div key={i} className="group border-2 border-border bg-card hover:border-primary transition-colors rounded-lg overflow-hidden flex-1">
                  <div className="w-full h-32 overflow-hidden mb-4">
                    <img src={`https://picsum.photos/seed/episode-${i}/400/200`} alt={`Episode ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="mb-2">
                      <span className="text-primary text-[10px] font-bold tracking-wider">LATEST</span>
                    </div>
                    <h3 className="text-base font-bold mb-2 uppercase">The Scripts That Break Us</h3>
                    <a href="#" className="inline-block px-5 py-2 bg-primary text-white text-[10px] font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-colors rounded-lg">
                      WATCH NOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="border-b border-border px-6 py-28">
        <div className="max-w-[1160px] mx-auto">
          <div className="flex items-end gap-4 mb-16">
            <div className="w-2 h-20 bg-secondary" />
            <h2 className="mb-0 text-5xl uppercase">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="group border-2 border-border bg-card hover:border-secondary transition-colors rounded-lg overflow-hidden">
                <div className="w-full h-72 overflow-hidden mb-6">
                  <img src={`https://picsum.photos/seed/article-${i}/700/400`} alt={`Article ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="px-8 pb-8">
                  <div className="mb-4">
                    <span className="text-secondary text-xs font-bold tracking-wider">DEEP DIVE</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 uppercase">Living in the Drama Zone</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">How your brain scripts fights before they even happen—and what you can do about it. This article explores the neuroscience behind conflict patterns.</p>
                  <a href="#" className="inline-block px-8 py-3 bg-secondary text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-secondary transition-colors rounded-lg">
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTICIPATION */}
      <section className="border-b border-border px-6 py-24 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-primary" />
                <h2 className="mb-0">SHARE YOUR TRUTH</h2>
              </div>
              <p className="text-xl text-muted-foreground font-bold leading-relaxed mb-8">
                Join the conversation. Record your truth bomb or share your written story with the community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-8 py-3 bg-primary text-white text-xs font-bold tracking-[0.1em] hover:bg-white hover:text-primary transition-colors rounded-lg">
                  RECORD YOUR TRUTH BOMB
                </a>
                <a href="#" className="px-8 py-3 border-2 border-primary text-primary text-xs font-bold tracking-[0.1em] hover:bg-primary hover:text-white transition-colors rounded-lg">
                  WRITE YOUR STORY
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 border-4 border-primary rounded-full flex items-center justify-center bg-primary/10">
                <span className="text-5xl">🎙️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="border-b border-border px-6 py-20">
        <div className="max-w-[1160px] mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-primary" />
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
      <footer className="px-6 py-16 bg-gradient-to-t from-secondary/20 to-transparent">
        <div className="max-w-[1160px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-12 bg-primary" />
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