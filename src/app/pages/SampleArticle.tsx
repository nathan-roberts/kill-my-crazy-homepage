import React from 'react';
import InternalPageLayout from '../components/InternalPageLayout';

export default function SampleArticle() {
  return (
    <InternalPageLayout title="Sample Article">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-[#9B002F]/10 text-[#9B002F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Personal Growth
            </span>
            <span>•</span>
            <time>May 30, 2026</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Understanding the Scripts That Control Our Relationships
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            We all carry unconscious patterns that dictate how we interact with others. These scripts, formed through years of experience, can either support our growth or keep us stuck in cycles of drama and misunderstanding.
          </p>
        </header>

        <div className="prose-content">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Relationship Scripts?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Relationship scripts are the automatic responses and behaviors we fall into when interacting with others. They're the unspoken rules we follow, often without realizing it. These scripts might include always being the peacemaker, never showing vulnerability, or consistently taking on the caretaker role.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The challenge is that these scripts often operate below our conscious awareness. We don't choose them—they choose us. And while some scripts serve us well, many keep us trapped in patterns that no longer serve our highest good.
          </p>

          <blockquote className="border-l-4 border-[#9B002F] pl-6 py-4 my-8 bg-gray-50 italic text-gray-700">
            "The first step to breaking free is recognizing that you're following a script at all."
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Identifying Your Patterns</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start paying attention to your automatic responses in different situations. Do you always apologize first, even when you're not at fault? Do you avoid conflict at all costs? Do you take responsibility for others' emotions? These are all clues to the scripts you're running.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Notice your immediate reactions in stressful situations</li>
            <li>Ask trusted friends for honest feedback about your patterns</li>
            <li>Journal about recurring themes in your relationships</li>
            <li>Consider family dynamics and how they might influence your behavior</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rewriting Your Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once you've identified your scripts, the real work begins. Rewriting these patterns requires conscious effort and practice. It means choosing different responses, even when they feel uncomfortable at first. It means setting boundaries where you never have before. It means being vulnerable when you'd rather protect yourself.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This process isn't about becoming someone different—it's about becoming more authentically yourself. It's about shedding the layers of conditioning that keep you from showing up fully in your relationships.
          </p>

          <div className="bg-[#9B002F]/5 border border-[#9B002F]/20 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Practice This Week</h3>
            <p className="text-gray-700 mb-4">
              Choose one relationship script to focus on this week. When you notice yourself falling into that pattern, pause and ask: "Is this really how I want to respond? What would be more authentic for me in this moment?"
            </p>
            <p className="text-sm text-gray-600 italic">
              Remember: Progress, not perfection, is the goal.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Freedom of Choice</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As you become more aware of your patterns and practice new ways of being, something remarkable happens: you gain freedom. No longer are you at the mercy of unconscious programming. You can choose how to respond in each moment, based on your values and what feels true to you.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This freedom extends beyond your romantic relationships. It impacts your friendships, your family dynamics, your work relationships, and most importantly, your relationship with yourself.
          </p>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9B002F] rounded-full flex items-center justify-center text-white font-bold">
                  MB
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mary Beth</p>
                  <p className="text-sm text-gray-600">Relationship Coach & Podcast Host</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-[#9B002F] transition-colors">
                  Share
                </button>
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-[#9B002F] transition-colors">
                  Bookmark
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </InternalPageLayout>
  );
}
