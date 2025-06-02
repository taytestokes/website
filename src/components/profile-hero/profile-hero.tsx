import React from 'react';
import Image from 'next/image';

type ProfileHeroProps = {
  bio: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

export const ProfileHero = ({ bio, firstName, lastName, imageUrl }: ProfileHeroProps) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="flex shrink-0 rounded-full border-2 border-zinc-200">
        <Image
          aria-hidden
          className="rounded-full border-2 border-white"
          src={imageUrl}
          alt={fullName}
          width={125}
          height={125}
        />
      </div>
      <hgroup className="flex flex-col items-center md:items-start gap-2 max-md:text-center">
        <h1 className="text-4xl font-semibold  tracking-tight">{fullName}</h1>
        <p className="text-medium text-zinc-700">{bio}</p>
      </hgroup>
    </div>
  );
};
