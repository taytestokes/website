import React from 'react';

type ProjectCardProps = {
  title: string;
  href: string;
  description: string;
};

export const ProjectCard = ({ description, href, title }: ProjectCardProps) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="flex transition duration-150 ease-in rounded-md hover:-translate-y-1"
    >
      <div className="flex flex-col items-start gap-4 p-4 bg-zinc-100 rounded-md">
        <div className="flex-1">
          <p className="text-lg font-medium ">{title}</p>
          <p className="text-sm text-zinc-700">{description}</p>
        </div>
        <p className="text-xs text-zinc-500">{href.replace('https://', '')}</p>
      </div>
    </a>
  );
};
