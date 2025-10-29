import React, { useRef, useState, useEffect } from 'react';
import PostCard from './PostCard';

const RecentPosts = ({ posts }) => {
  const scrollerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const pos = useRef({ startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    const onWheel = (e) => {
      if (!el) return;
      // Shift+wheel or trackpad: translate vertical scroll into horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
      }
    };
    el?.addEventListener('wheel', onWheel, { passive: true });
    return () => el?.removeEventListener('wheel', onWheel);
  }, []);

  const onDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    setIsDown(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    pos.current = { startX: pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
  };

  const onMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !isDown) return;
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - el.offsetLeft;
    const walk = (x - pos.current.startX) * 1.2; // drag speed multiplier
    el.scrollLeft = pos.current.scrollLeft - walk;
  };

  const onUp = () => setIsDown(false);

  const scrollBy = (amount) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Arrow controls */}
      <button
        aria-label="Scroll left"
        className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow hover:bg-white transition"
        onClick={() => scrollBy(-360)}
      >
        <span className="sr-only">Left</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Scroll right"
        className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow hover:bg-white transition"
        onClick={() => scrollBy(360)}
      >
        <span className="sr-only">Right</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div
        ref={scrollerRef}
        className={`relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-5 pb-2 pt-2 px-1 cursor-${isDown ? 'grabbing' : 'grab'} select-none`}
        onMouseDown={onDown}
        onMouseLeave={onUp}
        onMouseUp={onUp}
        onMouseMove={onMove}
        onTouchStart={onDown}
        onTouchEnd={onUp}
        onTouchMove={onMove}
        style={{ scrollBehavior: 'smooth' }}
      >
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
        {/* Tail gradient to suggest more content */}
        <div className="pointer-events-none sticky right-0 self-stretch w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
};

export default RecentPosts;
