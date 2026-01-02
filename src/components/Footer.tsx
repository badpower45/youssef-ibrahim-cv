import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 text-slate-500 border-t border-slate-900">
      <div className="container px-4 md:px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Youssef Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
