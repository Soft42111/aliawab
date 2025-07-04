import { useState, useEffect } from 'react';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className="font-orbitron font-bold text-xl neon-text hover:scale-105 transition-transform duration-300"
          >
            Ali Awab
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-rajdhani font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://discord.com/users/665975454410211337"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 group social-discord"
              title="Discord"
            >
              <FaDiscord className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://t.me/datsleepyhead"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 group social-telegram"
              title="Telegram"
            >
              <FaTelegram className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://x.com/datsleepyhead"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 group social-x"
              title="X (Twitter)"
            >
              <FaTwitter className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-border hover:border-primary transition-all duration-300 flex flex-col items-center justify-center gap-1 group"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-rajdhani font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <a
                href="https://discord.com/users/665975454410211337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <FaDiscord /> Discord
              </a>
              <a
                href="https://t.me/datsleepyhead"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <FaTelegram /> Telegram
              </a>
              <a
                href="https://x.com/datsleepyhead"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <FaTwitter /> X
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;