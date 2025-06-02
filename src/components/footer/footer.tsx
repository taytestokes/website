import React from 'react';

import { profile } from '../../config/profile';
import { site } from '../../config/site';

export const Footer = () => {
  return (
    <footer className="w-full sm:max-w-[720px] mx-auto px-4 py-8 flex items-center justify-between">
      <p className="text-xs text-zinc-700">
        &copy; {new Date().getFullYear()} - {profile.firstName} {profile.lastName}
      </p>
      <a href={site.githubUrl} rel="noopener noreferrer" target="_blank">
        <p className="text-xs text-zinc-700">View Source</p>
      </a>
    </footer>
  );
};
