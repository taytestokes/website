import React from 'react';

type ExperienceCardProps = {
  tenure: string;
  position: string;
  company: {
    name: string;
    href: string;
  };
  contributions: string[];
  technologies: string[];
};

export const ExperienceCard = ({
  tenure,
  position,
  company,
  contributions,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
      <p className="min-w-30 text-xs text-zinc-500 font-semibold uppercase tracking-wide mt-1.5 text-nowrap">
        {tenure}
      </p>

      <div>
        <p className="text-lg font-medium">{position}</p>
        <a
          href={company?.href}
          rel="noopener noreferrer"
          target="_blank"
          className="flex transition duration-150 ease-in rounded-md mb-4"
        >
          <p className="text-sm text-zinc-500">{company?.name}</p>
        </a>

        {contributions.map((contribution) => (
          <p key={contribution} className="text-sm text-zinc-700 mb-4">
            {contribution}
          </p>
        ))}

        <div className="flex items-center gap-1 flex-wrap">
          {technologies.map((technology) => (
            <div key={technology} className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
