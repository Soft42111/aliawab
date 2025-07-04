import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return <footer className="relative py-12 border-t border-border bg-gradient-to-r from-background to-card">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-orbitron font-bold text-2xl neon-text mb-4">
              Ali Awab
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Web3 Strategist & Community Expert building the future of blockchain technology. 
              🙌 Let's revolutionize the digital world together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-orbitron font-bold text-lg text-primary mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={e => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                About
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={e => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Experience
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-orbitron font-bold text-lg text-secondary mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a href="mailto:aliawab888@gmail.com" className="block text-muted-foreground hover:text-secondary transition-colors duration-300">
                aliawab888@gmail.com
              </a>
              <a href="tel:+92-345-8805889" className="block text-muted-foreground hover:text-secondary transition-colors duration-300">
                +92-345-8805889
              </a>
              <p className="text-muted-foreground">
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://discord.com/users/665975454410211337" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 hover:scale-110 group social-discord" title="Discord">
            <FaDiscord className="text-xl group-hover:animate-bounce" />
          </a>
          <a href="https://t.me/datsleepyhead" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 hover:scale-110 group social-telegram" title="Telegram">
            <FaTelegram className="text-xl group-hover:animate-bounce" />
          </a>
          <a href="https://x.com/datsleepyhead" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300 flex items-center justify-center hover:bg-primary/10 hover:scale-110 group social-x" title="X (Twitter)">
            <FaTwitter className="text-xl group-hover:animate-bounce" />
          </a>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          {/* Love Message */}
          <p className="text-lg font-rajdhani font-medium">
            <span className="text-muted-foreground">Built with love </span>
            <span className="text-red-400 animate-pulse">💕</span>
            <span className="text-muted-foreground "> for </span>
            <span className="neon-text font-bold px-[3px]">Ali Awab</span>
            <span className="text-muted-foreground"> by </span>
            <a href="https://basitresume.xyz" target="_blank" rel="noopener noreferrer" className="neon-text font-bold hover:text-secondary transition-colors duration-300 px-0 py-0 my-[100px]">
              Basit
            </a>
          </p>

          {/* Lovable AI Appreciation */}
          <p className="text-sm text-muted-foreground">
            <span>Powered by cutting-edge AI technology </span>
            <span className="text-primary">🙌</span>
            <span> and infinite creativity </span>
            <span className="text-secondary">👏</span>
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ali Awab. All rights reserved. | Web3 Expert & Community Builder
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{
          animationDelay: '0s'
        }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full opacity-40 animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-20 animate-float" style={{
          animationDelay: '4s'
        }}></div>
        </div>
      </div>
    </footer>;
};
export default Footer;