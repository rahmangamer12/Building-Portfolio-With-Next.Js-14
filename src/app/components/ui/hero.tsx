import React from 'react';
import { Spotlight } from './spotlight';
import { TextGenerateEffect } from './TextGenerateEffect';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw] z-20"
          fill="purple"
        />
        <Spotlight
          className="-top-28 -left-80 h-[80vh] w-[50vw] z-30"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-cneter relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 w-full">
            Dynamic Web Magic With Next.Js
          </h2>
          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          />
          <p className="md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m <span className="text-blue-100">Abdul Rehman.</span> I
            am a <span className="text-blue-100">Next.Js Developer.</span>
          </p>
          <Link href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {
                console.log('Show my work clicked');
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
