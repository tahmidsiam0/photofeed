"use client";
import Image from "next/image";
import LanguageModal from "./LanguageModal";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="py-4 md:py-6 border-b">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <Logo />

          <div className="flex gap-4 items-center">
            <div className="relative">
              <button
                className="flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image
                  className="max-w-8"
                  src="/bd.png"
                  alt="bangla"
                  width={150}
                  height={50}
                />
                Bangla
              </button>
              {isOpen && <LanguageModal />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
