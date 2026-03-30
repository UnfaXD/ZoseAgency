'use client';

import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed w-screen bg-background/60 backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Image
          src="/assets/logo.svg"
          alt="Zose Agency"
          width={1000}
          height={1000}
          className="size-32 h-12"
        />
        <div className="flex items-center gap-4">
          <ul className="flex items-center text-sm rounded-lg">
            <li className="bg-accent-foreground hover:bg-primary duration-500 cursor-pointer text-muted py-3 px-4 font-medium rounded-l-xl">
              Solutions
            </li>
            <li className="bg-accent-foreground hover:bg-primary duration-500 cursor-pointer text-muted py-3 px-4 font-medium">
              About
            </li>
            <li className="bg-accent-foreground hover:bg-primary duration-500 cursor-pointer text-muted py-3 px-4 font-medium">
              Tariffs
            </li>
            <li className="bg-accent-foreground hover:bg-primary duration-500 cursor-pointer text-muted py-3 px-4 font-medium rounded-r-xl">
              Contact
            </li>
          </ul>
          <ul className="flex items-center gap-2">
            <li className="font-medium py-3 px-4 border border-border text-sm rounded-lg flex items-center gap-2 hover:bg-primary hover:text-primary-foreground duration-500 cursor-pointer">
              <p>App Store</p>
              <FaAppStore />
            </li>
            <li className="font-medium py-3 px-4 border border-border text-sm rounded-lg flex items-center gap-2 hover:bg-primary hover:text-primary-foreground duration-500 cursor-pointer">
              <p>Play Store</p>
              <FaGooglePlay />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
