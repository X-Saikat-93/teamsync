'use client';

import { useState } from 'react';

import type { SignInFlow } from '../types';
import { SignInCard } from './sign-in-card';
import { SignUpCard } from './sign-up-card';
import Image from 'next/image';

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>('signIn');

  return (
    // <div className="flex h-full items-center justify-center bg-[#5C3B58]">
    //   <div className="md:h-auto md:w-[420px]">
    //     {state === 'signIn' ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
    //   </div>
    // </div>
    <>
      <div className='flex flex-col items-center justify-center min-h-screen w-full gap-4 p-4 bg-[#5C3B58]'>
        {/* Logo */}
        <Image
          src='/logo.svg'
          alt='Slack Logo'
          height={32}
          width={120}
          className='mb-6 invert'
        />

        {/* Sign In / Sign Up Form */}
        <div className='bg-white rounded-lg shadow-lg p-6 md:h-auto md:w-[420px] transition-all duration-300'>
          {state === "signIn" ? (
            <SignInCard setState={setState} />
          ) : (
            <SignUpCard setState={setState} />
          )}
        </div>

        {/* Footer */}
        <div className='font-mono text-sm text-gray-200 mt-2'>
          &#91;© {new Date().getFullYear()} Saikat&#93;
        </div>
      </div>
    </>
  );
};
