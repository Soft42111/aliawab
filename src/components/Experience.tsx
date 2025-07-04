const Experience = () => {
  const experiences = [
    {
      title: "Community Moderator",
      company: "LiveArt",
      period: "July 2025 - Present",
      description: "Leading community engagement initiatives and fostering growth in the digital art and NFT space.",
      type: "past"
    },
    {
      title: "Regional Community Moderator", 
      company: "ICN (Impossible Cloud Network)",
      period: "Oct 2024 - Present",
      description: "Monitoring chat and creating valuable content to enhance project visibility. Handling support tickets and ensuring community satisfaction.",
      type: "current"
    },
    {
      title: "Senior Ambassador",
      company: "Aethir Cloud",
      period: "Oct 2024 - Present", 
      description: "Co-Hosted Aethir's first IRL event above Pakistan. Organized community events and competitions. Created engaging content including videos and photos for Aethir.",
      type: "current"
    },
    {
      title: "Community Moderator",
      company: "Sora Chain",
      period: "Sep 2024 - Present",
      description: "Monitored chat and assisted the community with technical inquiries. Hosted weekly educational panels on various Web3 topics.",
      type: "current"
    },
    {
      title: "Senior Ambassador", 
      company: "Impossible Cloud Network",
      period: "Sep 2024 - Present",
      description: "Monitored chat and contributed valuable content to enhance project visibility. Supported moderation with technical issues and community management.",
      type: "current"
    },
    {
      title: "Ambassador",
      company: "Parasail",
      period: "Feb 2023 - Present",
      description: "Monitored chat and created valuable content to enhance project visibility. Handled support tickets efficiently.",
      type: "ongoing"
    },
    {
      title: "Community Moderator",
      company: "OptiPets",
      period: "July 2022 - Oct 2023",
      description: "Ensured a healthy chat environment by managing discussions. Conducted bug testing within the game's ecosystem.",
      type: "past"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'from-primary to-secondary';
      case 'ongoing': return 'from-secondary to-accent';
      case 'past': return 'from-accent to-primary';
      default: return 'from-primary to-secondary';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'current': return 'CURRENT';
      case 'ongoing': return 'ONGOING';
      case 'past': return 'COMPLETED';
      default: return 'CURRENT';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 neon-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building communities and driving growth in the Web3 ecosystem 🙌
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-16 lg:ml-0 lg:w-1/2">
                  <div className="glow-card p-6 group">
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} text-black`}>
                        {getTypeBadge(exp.type)}
                      </span>
                      <span className="text-sm text-muted-foreground font-rajdhani">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-orbitron font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-lg font-rajdhani font-semibold mb-4 text-accent">
                      {exp.company}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>

                {/* Spacer for timeline balance */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glow-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
              Ready to Collaborate? 👏
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative Web3 projects and help build amazing communities.
            </p>
            <a
              href="#contact"
              className="neon-button inline-block"
            >
              <span className="relative z-10">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;