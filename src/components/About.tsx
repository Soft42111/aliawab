const About = () => {
  const skills = [
    'Community Moderation',
    'Video Editing', 
    'Content Creation',
    'Technical Analysis',
    'Decision Making',
    'Problem Solving',
    'Public Speaking'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 neon-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="glow-card p-8">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
              Web3 Community Expert 👏
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Motivated and enthusiastic community manager with a strong background in the Web3 and crypto space. 
              Committed to creating engaging community experiences, fostering growth, and ensuring member satisfaction.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about learning and sharing knowledge within the industry while actively participating in project 
              development and community events. With extensive experience in blockchain technologies and DeFi protocols, 
              I bring both technical expertise and community-building skills to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-orbitron font-semibold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">Islamabad, Pakistan</p>
              </div>
              <div>
                <h4 className="font-orbitron font-semibold text-primary mb-2">Languages</h4>
                <p className="text-muted-foreground">English, Urdu, Hindi</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-secondary">
              Key Skills
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="glow-card p-4 hover:bg-primary/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-rajdhani font-medium text-foreground">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-orbitron font-bold mb-8 text-center text-accent">
            Education & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">CA</span>
              </div>
              <h4 className="font-orbitron font-bold text-xl mb-2">Chartered Accountancy</h4>
              <p className="text-muted-foreground">ACCA Certification</p>
            </div>
            
            <div className="glow-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">ICT</span>
              </div>
              <h4 className="font-orbitron font-bold text-xl mb-2">SMC & ICT Trading</h4>
              <p className="text-muted-foreground">Advanced Trading Strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;