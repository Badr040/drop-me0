"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Search, Menu, X, LogIn } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Recycle", href: "/recycle" },
  { name: "Rewards", href: "/rewards" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="search the category..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>
          </div>

          {/* Chat Widget */}
          <div className="hidden lg:flex items-center gap-2 bg-background-alt rounded-lg px-4 py-2">
            <p className="text-xs text-foreground">
              <span className="font-semibold">Our chat will help you complete the process faster.</span>
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="What do you want to recycle?"
                className="text-xs px-3 py-1.5 border border-border rounded-md w-40"
              />
              <button className="bg-secondary text-white text-xs px-3 py-1.5 rounded-md hover:bg-secondary-light transition-colors">
                Go
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-4 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all relative ${
                pathname === item.href
                  ? "bg-secondary text-white shadow-md scale-105"
                  : "bg-secondary/90 text-white/90 hover:bg-secondary"
              }`}
              style={{
                clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
              }}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Login Button */}
          <Link
            href="/login"
            className="ml-6 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            <span className="text-sm font-semibold hidden sm:inline">Login</span>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href ? "bg-primary text-white" : "bg-background-alt text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
