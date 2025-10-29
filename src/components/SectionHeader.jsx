import React from 'react';

const SectionHeader = ({ title, subtitle, action }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
};

export default SectionHeader;
