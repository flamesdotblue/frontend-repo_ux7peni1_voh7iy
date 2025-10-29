import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette so content remains readable; doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="backdrop-blur-[2px]">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-700 shadow-sm">
            New • Dynamic UI
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Recent Posts
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl">
            A modern, interactive carousel where your latest stories shine. Drag to explore, hover to feel the depth, and enjoy a glassy, vibrant aesthetic inspired by digital art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
