import React from 'react';
import InternalPageLayout from '../components/InternalPageLayout';

interface SampleArticleProps {
  onNavigateHome?: () => void;
}

export default function SampleArticle({ onNavigateHome }: SampleArticleProps) {
  return (
    <InternalPageLayout title="Episode 3" onNavigateHome={onNavigateHome}>
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-[#9B002F]/20 text-[#ff6b9d] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-[#9B002F]/30">
              Podcast Episode
            </span>
            <span>•</span>
            <time>May 31, 2026</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Cutting Through the Noise to Find Common Ground
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            The world is loud, heavy, and increasingly polarized. Between the isolation of the pandemic, the rapid digital shift, and social media feeds flooded with negativity, it's easy to become overwhelmed.
          </p>
        </header>

        <div className="prose-content">
          <p className="text-gray-300 leading-relaxed mb-6">
            We noticed a dangerous cultural shift: people are weaponizing "counseling speak" and using labels to hurt each other rather than to heal.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            We decided enough is enough.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Here we shared our very first unscripted recording session (obvious). We sat down to capture our exact "why." We aren't doing this for fame, money, or the latest trend. We are here to cut through the noise, knock down the toxic cultural scripts that break us apart, and help us all reclaim some peace.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Who We Are: Radical Truth Meets Resilience</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            We are Mary Beth and Mallory. We represent two different generations coming together with a shared mission.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            While life throws hardships at everyone, we believe your perspective is your greatest superpower. We have survived our own share of broken times, and we didn't just power through—we walked away with hard-earned wisdom—our proverbial pot of gold.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Now, we are bringing that wisdom to the coffee table. We offer a conversation where friends can openly call each other out, drop truth bombs, and fight to maintain a realistic, but positive mindset, by choice.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why "Kill My Crazy" Matters Right Now</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Our podcast is dedicated to exposing the invisible scripts and bad habits that destroy relationships.
          </p>

          <div className="bg-[#9B002F]/10 border border-[#9B002F]/30 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-white mb-4">Our Core Values</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff6b9d] mr-3">•</span>
                <div>
                  <strong className="text-white">Shared Wisdom:</strong> We are building a community where lived experience is the key to finding common ground.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b9d] mr-3">•</span>
                <div>
                  <strong className="text-white">Soul Healing:</strong> We want to free you from the invisible burdens and labels weighing you down.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b9d] mr-3">•</span>
                <div>
                  <strong className="text-white">Kindness not Politeness:</strong> We are tackling the jagged edges of life that everyone else is too polite—or too crazed—to mention.
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Promise to You</h2>
          
          <blockquote className="border-l-4 border-[#9B002F] pl-6 py-4 my-8 bg-gray-800/50 italic text-gray-300">
            "If what we say is true, it will stick. If it is not, you can ignore us."
          </blockquote>

          <p className="text-gray-300 leading-relaxed mb-6">
            We aren't here to lecture you. We are here to share, to laugh, and show strength through vulnerability. Let's build a functional game plan for getting along in a chaotic world. If our raw conversations help just one single person break a poor habit or heal a relationship, then every broken moment we survived was entirely worth it.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            The truth is hard to hear sometimes, but it is always entertaining.
          </p>

          <div className="bg-gray-800/50 rounded-lg p-6 my-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Are you ready to turn the noise into a vibe?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-3xl mb-3">🎧</div>
                <h4 className="font-bold text-white mb-2">Listen</h4>
                <p className="text-sm text-gray-300">Tune into our debut episode of Kill My Crazy on YouTube.</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-3xl mb-3">🎙️</div>
                <h4 className="font-bold text-white mb-2">Share</h4>
                <p className="text-sm text-gray-300">Record your own stories or words of wisdom. We'll share your thinking on our upcoming episodes.</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-bold text-white mb-2">Discuss</h4>
                <p className="text-sm text-gray-300">Join our community hub to share your everyday stories and truth bombs.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">We Want to Hear From You</h2>
          
          <div className="bg-[#9B002F]/10 border border-[#9B002F]/30 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-white mb-3">Record Your Story</h3>
            <p className="text-gray-300 mb-4">
              What's the one sentence that finally made someone stop shouting and start listening?
            </p>
            <p className="text-gray-300 mb-6">
              We'll choose a contributor and share your story on an upcoming episode.
            </p>
            <button className="px-6 py-3 bg-[#9B002F] text-white font-bold hover:bg-[#800020] transition-colors">
              Record Your Story
            </button>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9B002F] rounded-full flex items-center justify-center text-white font-bold">
                  MB
                </div>
                <div>
                  <p className="font-bold text-white">Mary Beth & Mallory</p>
                  <p className="text-sm text-gray-400">Hosts of Kill My Crazy</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                  Share Episode
                </button>
                <button className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </InternalPageLayout>
  );
}
