import React from 'react';

const PostCard = ({ post }) => {
  return (
    <article
      className="group relative min-w-[280px] max-w-[320px] snap-start rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(17,12,46,0.1)] transition-transform duration-300 hover:-translate-y-1"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-semibold bg-white/80 text-gray-800 shadow-sm">
            {post.tag}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-8 w-8 rounded-full object-cover border border-white/70 shadow"
            draggable={false}
          />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
