import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { ProfileHero } from '../components/profile-hero';
import { ProjectCard } from '../components/project-card';
import { ExperienceCard } from '../components/experience-card';

import { profile } from '../config/profile';
import { projects } from '../config/projects';
import { experiences } from '../config/experiences';

export default function Page() {
  return (
    <main className="w-full sm:max-w-[720px] mx-auto py-16 flex flex-col gap-16">
      <ProfileHero
        bio={profile.bio}
        firstName={profile.firstName}
        lastName={profile.lastName}
        imageUrl={profile.imageUrl}
      />

      <div className="px-4">
        <h2 className="text-xl font-semibold tracking-tight mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4">
          {projects.map(({ description, href, title }) => (
            <ProjectCard
              key={`${title} - ${href}`}
              description={description}
              href={href}
              title={title}
            />
          ))}
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-semibold tracking-tight mb-8">Experience</h2>
        <div className="grid gap-8">
          {experiences.map(({ tenure, position, company, contributions, technologies }) => (
            <ExperienceCard
              key={`${company?.name} - ${position}`}
              tenure={tenure}
              position={position}
              company={company}
              contributions={contributions}
              technologies={technologies}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
