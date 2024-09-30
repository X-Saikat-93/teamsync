"use client"

import { useState } from "react"

import { SignInFlow } from "../types";

import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

import { Disclaimer } from "@/components/disclaimer";
import Image from "next/image";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

    return (
      <div className='flex flex-col items-center justify-center min-h-screen w-full gap-6 p-4 bg-gray-50'>
        {/* Disclaimer */}
        {/* <div className="absolute top-0 left-0 w-full">
        <Disclaimer />
    </div> */}

        {/* Logo */}
        <Image
          src='/logo.svg'
          alt='Slack Logo'
          height={32}
          width={120}
          className='mb-4'
        />

        {/* Sign In / Sign Up Form */}
        <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>
          {state === "signIn" ? (
            <SignInForm setState={setState} />
          ) : (
            <SignUpForm setState={setState} />
          )}
        </div>

        {/* Footer */}
        <div className='font-mono text-xs text-gray-600 absolute bottom-4'>
          &#91;© {new Date().getFullYear()} Saikat &#93;
        </div>
      </div>
    );
}