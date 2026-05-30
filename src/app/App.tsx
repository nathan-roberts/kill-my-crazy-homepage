export default function App() {
  return (
    <div className="min-h-screen bg-background relative" style={{fontFamily: '"Montserrat", sans-serif'}}>
      {/* HEADER - Transparent overlay */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between">
          <div className="mb-2">
            <span className="text-white text-sm tracking-[0.15em] font-bold">[ LOGO ]</span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">EPISODES</a>
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">ARTICLES</a>
            <a href="#" className="text-white text-xs tracking-[0.1em] font-bold hover:text-primary transition-colors">ABOUT</a>
          </nav>

          <a href="#" className="px-10 py-4 bg-white text-[#9B002F] text-xs tracking-[0.15em] font-bold hover:bg-[#9B002F] hover:text-white transition-colors">
            SHARE YOUR STORY
          </a>
        </div>
      </header>

      {/* HERO SECTION - Full-width dark cinematic */}
      <section className="relative py-30 flex items-center overflow-hidden">
        {/* Dark blue gradient background with atmospheric texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#13294B] to-[#1e3a5f]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-30" />

        {/* Atmospheric glow effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#9B002F]/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-[1550px] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <div className="mb-8">
                <span className="text-[#800020] text-xs tracking-[0.25em] font-bold">PODCAST</span>
              </div>
              <h1 className="mb-8 leading-[0.95] uppercase text-white text-6xl md:text-7xl font-black tracking-tight">
                EXPOSING THE NOISE
              </h1>
              <p className="text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-lg">
                Dedicated to exposing the scripts that break us down and make us crazy. We offer coffee table conversations where friends call each other out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="px-10 py-4 bg-[#9B002F] text-white text-xs tracking-[0.15em] font-bold hover:shadow-lg hover:shadow-[#9B002F]/30 transition-all text-center">
                  WATCH NOW
                </a>
                <a href="#" className="px-10 py-4 bg-white text-[#9B002F] text-xs tracking-[0.15em] font-bold hover:bg-[#9B002F] hover:text-white transition-all text-center">
                  SHARE YOUR STORY
                </a>
              </div>
            </div>
            <div className="md:col-span-3 relative">
              <div className="relative">
                {/* Full featured rectangular photo */}
                <div className="w-full max-w-none border-4 border-[#9B002F]/30 overflow-hidden relative shadow-2xl">
                  <img src="/images/hero.png" alt="Mary Beth and Mallory" className="w-full h-full object-cover" />
                </div>
                {/* Enhanced rim lighting effects for rectangular format */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9B002F]/40 to-purple-900/40 blur-xl -z-10" />
                <div className="absolute -inset-2 bg-gradient-to-br from-[#9B002F]/30 to-[#9b002f]/30 blur-lg -z-10" />
                {/* Glow orbs positioned for rectangular layout */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#9B002F]/40 blur-2xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-purple-500/40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              <div key={i} className="group bg-card hover:border-primary transition-colors overflow-hidden">
                <div className="w-full overflow-hidden mb-0 relative group" style={{aspectRatio: '1515/979'}}>
                  <img src={`/images/thumb-${i}.png`} alt={`Episode ${i}`} className="w-full h-full object-cover  transition-transform" />
                                  </div>
                <div className="px-6 pb-6 pt-6 bg-[#9B002F]">
                  <h3 className="text-xl font-bold mb-3 uppercase text-white">The Scripts That Break Us</h3>
                  <p className="text-base text-white/90 mb-6 leading-relaxed">Mary Beth and Mallory dive deep into the unconscious patterns that keep us stuck in drama cycles.</p>
                  <a href="#" className="inline-block px-6 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-all">
                    WATCH NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="px-6 py-28 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative z-10 max-w-[1550px] mx-auto">
          <div className="mb-16">
            <h2 className="mb-0 text-5xl uppercase">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="group bg-[#9B002F] hover:bg-[#800025] transition-colors overflow-hidden border-2 border-transparent hover:border-primary">
                <div className="px-8 py-8">
                  <h3 className="text-2xl font-bold mb-3 uppercase text-white">Living in the Drama Zone</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">How your brain scripts fights before they even happen—and what you can do about it.</p>
                  <a href="#" className="inline-block px-6 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.15em] hover:bg-white hover:text-primary transition-all">
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTICIPATION */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Geometric pattern overlay */}

        <div className="relative z-10 max-w-[1550px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 border-4 border-[#9B002F] flex items-center justify-center bg-[#9B002F] shadow-2xl p-4">
                <svg width="694" height="556" viewBox="0 0 694 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 306H691" stroke="white" stroke-width="6.00009" stroke-miterlimit="22.9256" stroke-linecap="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 313.744L39.3208 340.244C40.3311 337.069 58.2138 280.735 61.1062 274.643L61.0752 274.494L61.1743 274.502C61.3499 274.175 61.4553 274.034 61.4925 274.143L81.8379 361.333L91.6552 304.161C91.7234 303.771 99.6876 243.931 102.46 244.2C105.803 244.528 113.889 338.016 113.94 338.469L123.578 421.052L143.32 131.767C143.913 128.284 145.806 128.202 146.462 131.689L166.628 360.584L175.096 290.568C175.26 289.242 181.627 185.666 189.814 198.858C193.347 204.548 201.809 314.524 201.809 314.524L209.139 388.601C213.878 284.3 226.381 9.62931 226.974 5.6743C228.117 -1.9432 232.337 -1.87299 233.405 5.77571L251.615 479.757L268.919 159.943C270.051 152.607 274.045 152.454 275.323 159.717L293.871 407.732L311.605 235.58C312.874 229.172 316.206 228.813 317.851 234.901L337.103 349.842L355.519 197.629C356.973 191.049 360.554 191.209 361.839 197.918L379.027 380.496L397.427 186.883C398.769 179.995 402.515 180.065 403.783 186.993L421.612 396.87L428.63 332.568C428.831 330.719 433.845 218.176 444.216 231.925C447.866 236.762 456.994 305.858 456.994 305.858L464.239 350.279L483.051 91.417C484.326 84.1076 488.357 84.287 489.462 91.6783C489.716 93.375 501.705 343.98 506.704 448.651L526.395 159.935C527.145 155.481 529.568 155.473 530.328 159.885L549.49 428.155C554.07 382.832 566.705 258.078 568.794 240.264L568.784 240.186H568.804C568.957 238.895 569.054 238.158 569.085 238.107C569.693 237.101 570.397 237.639 570.761 238.977L591.652 362.3L601.897 290.728C601.944 290.389 610.704 213.734 613.294 213.613C613.336 213.605 613.454 214.022 613.617 214.771L613.77 214.764L613.712 215.212C616.621 229.051 633.037 329.112 634.788 339.764C637.158 332.517 654.526 279.456 656.076 275.462L656.07 275.454H656.076C656.138 275.294 656.181 275.204 656.187 275.212L674 305.725L656.15 275.583C655.002 279.116 634.925 341.106 634.815 341.215C634.793 341.234 634.731 341.012 634.64 340.614L634.518 340.583L634.586 340.384C632.419 330.59 616.41 235.912 613.352 217.798L592.472 367.925C592.24 368.912 591.747 369.403 591.261 368.752C590.891 368.252 574.75 274.771 570.052 247.543L550.659 445.558C550.225 447.735 549.157 448.542 548.29 447.076C548.246 447.006 548.147 446.105 547.998 444.56L547.829 444.548L547.92 443.69C545.592 418.209 533.46 255.761 528.504 189.239L508.845 494.774C507.851 500.734 504.552 500.683 503.636 494.626C503.376 492.945 491.187 253.276 485.681 144.888L479.048 236.149C479.048 236.149 472.063 374.973 467.673 382.82C459.062 398.208 450.833 309.493 450.827 309.45L442.985 261.405L424.379 431.907C422.962 438.659 419.284 438.507 418.032 431.65L400.424 224.339L392.985 302.632C392.985 302.632 385.364 413.064 381.079 419.827C370.158 437.059 365.673 308.252 365.663 308.131L358.269 229.612L340.745 374.403C339.398 380.644 336.14 380.894 334.527 374.883L315.518 261.405L296.532 445.707C295.13 452.575 291.376 452.388 290.169 445.399L272.642 211.019L254.28 550.401C253.1 557.949 248.917 557.84 247.855 550.23L229.86 81.8532C224.165 202.282 213.577 425.249 213.033 428.993C212.085 435.441 208.627 435.702 207.389 429.481L187.926 224.737L179.46 292.487C179.321 293.614 172.754 385.04 166.238 384.63C158.726 384.158 153.908 258.276 153.799 257.001L145.018 152.696L135.658 282.49C135.594 283.36 129.39 433.666 123.88 434.095C119.368 434.435 112.401 339.877 112.317 339.136L102.291 250.129C98.8426 270.009 84.6145 351.976 82.2407 363.049L82.2779 363.209L82.2035 363.221C82.0548 363.911 81.9556 364.297 81.9184 364.297C81.875 364.309 81.7532 363.95 81.5693 363.272L81.5052 363.279L81.5321 363.139C78.803 353.287 63.0688 283.348 61.2446 275.243L50.4438 307.554C37.4326 346.465 44.6365 348.891 30.6418 327.165L22 313.744Z" fill="white" />
                </svg>


              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2 className="mb-0 text-white">SHARE YOUR TRUTH</h2>
              </div>
              <p className="text-xl text-white/90 font-bold leading-relaxed mb-8">
                Join the conversation. Record your truth bomb or share your written story with the community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-8 py-3 bg-white text-[#9B002F] text-xs font-bold tracking-[0.1em] hover:bg-[#9B002F] hover:text-white border-2 border-white transition-colors">
                  RECORD YOUR TRUTH BOMB
                </a>
                <a href="#" className="px-8 py-3 border-2 border-white text-white text-xs font-bold tracking-[0.1em] hover:bg-white hover:text-[#9B002F] transition-colors">
                  WRITE YOUR STORY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="px-6 py-20 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative z-10 max-w-[1550px] mx-auto">
          <div className="mb-12">
            <h2 className="mb-0">MEET THE HOSTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
            {[
              { name: 'Mary Beth', tagline: 'Says the quiet part out loud', avatarId: 44 },
              { name: 'Mallory', tagline: 'Breaks barriers with kind clarity', avatarId: 45 }
            ].map((host, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 border-4 border-primary mx-auto mb-6 overflow-hidden bg-card">
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
                <span className="text-white text-sm tracking-[0.15em] font-bold">[ LOGO ]</span>
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
                    <a key={social} href="#" className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-colors font-bold text-xs">
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