import { useState } from "react";
import { Logo } from "./Logo.tsx";
import { Navigation } from "./Navigation.tsx";
import { BurgerMenu } from "./BurgerMenu.tsx";
import { MobileNavigation } from "./MobileNavigation.tsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="flex justify-between items-center px-6 md:px-12 py-4
    bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 z-50 transition-all"
    >
      <div className="flex items-center gap-3">
        <Logo />

        <h1
          className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r
          from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-transparent"
        >
          MLPM
        </h1>
      </div>

      <div className="hidden md:flex">
        <Navigation />
      </div>

      <div className="md:hidden">
        <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 animate-slideIn">
          <MobileNavigation />
        </div>
      )}
    </header>
  );
}
