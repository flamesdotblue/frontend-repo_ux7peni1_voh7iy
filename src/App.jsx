import React from 'react';
import HeroCover from './components/HeroCover';
import SectionHeader from './components/SectionHeader';
import RecentPosts from './components/RecentPosts';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Designing with Glassmorphism: Practical Tips for Clarity and Depth',
      description:
        'Explore how subtle blurs, layered transparencies, and soft shadows can elevate your UI while keeping content readable across themes.',
      image:
        'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop',
      tag: 'Design',
      date: 'Oct 22, 2025',
      author: {
        name: 'Ava Carter',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      },
    },
    {
      id: 2,
      title: 'Motion that Matters: Micro-interactions that Delight',
      description:
        'From easing curves to hover physics, learn when and how to add motion that guides attention without stealing the show.',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
      tag: 'UX',
      date: 'Oct 20, 2025',
      author: {
        name: 'Liam Brooks',
        avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop',
      },
    },
    {
      id: 3,
      title: 'Building Faster: Component Patterns for Scalable Frontends',
      description:
        'A practical guide to composing UI with focused components that are easy to reuse, test, and maintain over time.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
      tag: 'Engineering',
      date: 'Oct 17, 2025',
      author: {
        name: 'Noah Kim',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
      },
    },
    {
      id: 4,
      title: 'Visual Language: Crafting a Cohesive Color System',
      description:
        'How to pick palettes, scale tokens, and keep consistency as your product evolves across multiple platforms.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
      tag: 'Brand',
      date: 'Oct 12, 2025',
      author: {
        name: 'Maya Patel',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroCover />

      <main className="relative -mt-16 md:-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-xl p-6 md:p-8">
            <SectionHeader
              title="Latest from the blog"
              subtitle="Fresh insights, stories, and tutorials. Drag the cards to discover more."
              action={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition"
                >
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              }
            />

            <div className="mt-6">
              <RecentPosts posts={posts} />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-24 py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Brand. Built with care.
      </footer>
    </div>
  );
};

export default App;
