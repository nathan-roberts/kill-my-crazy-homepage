export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="border-2 border-muted px-4 py-2">
            <span className="text-xs text-muted-foreground">Kill My Crazy</span>
          </div>

          <nav className="flex gap-8">
            <div className="text-sm text-muted-foreground">Episodes</div>
            <div className="text-sm text-muted-foreground">Articles</div>
            <div className="text-sm text-muted-foreground">Share Your Story</div>
            <div className="text-sm text-muted-foreground">About</div>
          </nav>

          <button className="px-6 py-2 border-2 border-foreground">
            Share Your Story
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="border-b border-border px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="mb-6">exposing the noise</h1>
            <p className="max-w-2xl mx-auto">
              Dedicated to exposing the scripts that break us down and make us crazy.
              We offer coffee table conversations where friends call each other out.
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <button className="px-8 py-3 border-2 border-foreground">
              Watch Episodes
            </button>
            <button className="px-8 py-3 border-2 border-muted">
              Share Your Story
            </button>
          </div>

          <div className="w-full h-64 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Host / Podcast Visual Placeholder</span>
          </div>
        </div>
      </section>

      {/* FEATURED / LATEST EPISODES */}
      <section className="border-b border-border px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8">Featured Episodes</h2>

          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-border p-4">
                <div className="w-full h-48 bg-muted mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Thumbnail</span>
                </div>
                <div className="h-8 border border-muted mb-2 flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Episode Title</span>
                </div>
                <div className="h-16 border border-muted mb-4 flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Short description</span>
                </div>
                <button className="w-full py-2 border-2 border-foreground">
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="border-b border-border px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8">Featured Articles</h2>

          <div className="grid grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="border-2 border-border p-6">
                <div className="w-full h-64 bg-muted mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Featured Image</span>
                </div>
                <div className="h-8 border border-muted mb-2 flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Article Title</span>
                </div>
                <div className="h-20 border border-muted mb-4 flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Excerpt text</span>
                </div>
                <button className="px-6 py-2 border-2 border-foreground">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTICIPATION */}
      <section className="border-b border-border px-6 py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="mb-4">Share Your Truth</h2>
            <p className="max-w-2xl mx-auto">
              Join the conversation. Record your truth bomb or share your written story with the community.
            </p>
          </div>

          <div className="w-24 h-24 border-2 border-muted rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Icon</span>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-foreground">
              Record Your Truth Bomb
            </button>
            <button className="px-8 py-3 border-2 border-muted">
              Write Your Story
            </button>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="border-b border-border px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8">Meet the Hosts</h2>

          <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 border-2 border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <div className="h-8 border border-muted mb-2 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Host Name</span>
                </div>
                <div className="h-16 border border-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Short Bio / Tagline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <div className="h-6 w-32 border border-muted mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Social Links</span>
              </div>
              <div className="flex gap-2">
                {['IG', 'TW', 'FB', 'YT'].map((social) => (
                  <div key={social} className="w-10 h-10 border border-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{social}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-6 w-32 border border-muted mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Watch On</span>
              </div>
              <div className="h-10 border border-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">YouTube</span>
              </div>
            </div>

            <div>
              <div className="h-6 w-24 border border-muted mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Contact</span>
              </div>
              <div className="h-8 border border-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Contact Link</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <div className="h-6 w-48 border border-muted mx-auto flex items-center justify-center">
              <span className="text-xs text-muted-foreground">© Copyright Info</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}