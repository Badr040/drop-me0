"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import Image from "next/image";
import LogoImage from "@/public/logo.png";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Recycle", href: "/recycle" },
  { name: "Rewards", href: "/rewards" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-1">
        {/* TOP ROW */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={LogoImage} alt="Logo" width={100} height={100} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    className={`relative bg-transparent text-foreground text-lg ${
                      isActive ? "text-primary" : "hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Login */}
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 py-4 border-t">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-primary text-white" : "hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
