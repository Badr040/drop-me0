import { Logo } from "./logo"
import { Linkedin, Instagram, Mail, Facebook, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent/20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Links and Social - Two columns */}
          <div className="flex justify-between gap-4">
            {/* Left - Links */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                title="Call us"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm text-foreground">+1 234 567 890</span>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                title="Open Google Maps"
              >
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm text-foreground">Location</span>
              </a>

              <a
                href="mailto:info@dropme.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                title="Send email"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm text-foreground">info@dropme.com</span>
              </a>
            </div>

            {/* Right - Social */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-muted font-semibold">Follow us</span>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-secondary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-secondary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-secondary" />
                </a>
              </div>
            </div>
          </div>

          {/* Chat Widget */}
          <div className="bg-card rounded-lg px-4 py-3 shadow-sm">
            <p className="text-xs font-semibold text-foreground">
              Our chat will help you complete the process faster.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="What do you want to recycle?"
                className="text-xs px-3 py-1.5 border border-border rounded-md flex-1"
              />
              <button className="bg-secondary text-white text-xs px-3 py-1.5 rounded-md hover:bg-secondary-light transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-center md:justify-between md:gap-6">
          <Logo />

          <div className="flex flex-col gap-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              title="Call us"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-sm text-foreground">+1 234 567 890</span>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              title="Open Google Maps"
            >
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm text-foreground">Location</span>
            </a>

            <a
              href="mailto:info@dropme.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              title="Send email"
            >
              <Mail className="w-5 h-5 text-secondary" />
              <span className="text-sm text-foreground">info@dropme.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted">Follow us</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-secondary" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <Instagram className="w-4 h-4 text-secondary" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <Mail className="w-4 h-4 text-secondary" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <Facebook className="w-4 h-4 text-secondary" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 shadow-sm">
            <div>
              <p className="text-xs font-semibold text-foreground">
                Our chat will help you complete the process faster.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="text"
                  placeholder="What do you want to recycle?"
                  className="text-xs px-3 py-1.5 border border-border rounded-md flex-1"
                />
                <button className="bg-secondary text-white text-xs px-3 py-1.5 rounded-md hover:bg-secondary-light transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
