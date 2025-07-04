import { useState } from 'react';
import { FaDiscord, FaTelegram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const contactInfo = [
    {
      label: "Email",
      value: "aliawab888@gmail.com",
      href: "mailto:aliawab888@gmail.com",
      icon: FaEnvelope
    },
    {
      label: "Phone", 
      value: "+92-345-8805889",
      href: "tel:+92-345-8805889",
      icon: FaPhone
    },
    {
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      icon: FaMapMarkerAlt
    }
  ];

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.com/users/665975454410211337",
      icon: FaDiscord,
      color: "social-discord",
      handle: "@datsleepyhead"
    },
    {
      name: "Telegram", 
      url: "https://t.me/datsleepyhead",
      icon: FaTelegram,
      color: "social-telegram", 
      handle: "@datsleepyhead"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/datsleepyhead", 
      icon: FaTwitter,
      color: "social-x",
      handle: "@datsleepyhead"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 neon-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to build something amazing together? Let's connect and explore opportunities in the Web3 space! 🙌
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glow-card p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:bg-primary/5 group"
                  >
                    <div className="text-primary text-xl">
                      <info.icon />
                    </div>
                    <div>
                      <p className="font-rajdhani font-semibold text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Message */}
            <div className="glow-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-orbitron font-bold text-xl mb-2 text-secondary">
                Available for Web3 Projects
              </h4>
              <p className="text-muted-foreground">
                Open to new opportunities in community management, DeFi, NFTs, and blockchain innovation.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="glow-card p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-secondary">
                Connect on Social 👏
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`flex items-center justify-between p-6 rounded-lg border-2 border-border hover:border-current transition-all duration-300 group ${social.color}`}
                  >
                    <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      <social.icon />
                    </div>
                      <div>
                        <p className="font-orbitron font-bold text-lg group-hover:text-current">
                          {social.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="glow-card p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-orbitron font-bold text-lg mb-2 text-accent">
                  Fast Response Time
                </h4>
                <p className="text-muted-foreground text-sm">
                  Usually responds within 2-4 hours during business hours (GMT+5)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glow-card p-8 max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-orbitron font-bold mb-4 neon-text">
              Let's Build the Future Together
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Whether you need community management, Web3 strategy, or blockchain expertise, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:aliawab888@gmail.com"
                className="neon-button"
              >
                <span className="relative z-10">Send Email</span>
              </a>
              <a
                href="https://t.me/datsleepyhead"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
              >
                Message on Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;