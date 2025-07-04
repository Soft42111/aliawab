import { useState, useEffect } from 'react';
const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Web3 Strategist', 'Community Moderator', 'Growth Expert', 'Blockchain Enthusiast'];
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % titles.length);
        }
      } else {
        setCurrentText(current.slice(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }} />)}
      </div>

      <div className="container mx-auto px-4 py-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          {/* Hero Content */}
          <div className="max-w-2xl flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-orbitron font-bold mb-4 lg:mb-6 neon-text leading-tight my-0 py-[25px] md:text-7xl">
              Ali Awab
            </h1>
            
            {/* Profile Picture */}
            <div className="relative group mb-6 lg:mb-8 flex justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-lg animate-pulse-glow w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto"></div>
              <img 
                src="/lovable-uploads/bcf4d65d-5131-4d43-bb00-bc9b210e5392.png" 
                alt="Ali Awab" 
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-500 hover:rotate-3" 
              />
            </div>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-rajdhani mb-6 lg:mb-8 min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center">
              <span className="text-foreground">I'm a </span>
              <span className="neon-text font-bold ml-2">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
              Motivated and enthusiastic community manager with a strong background in the Web3 and crypto space. 
              Committed to creating engaging community experiences, fostering growth, and ensuring member satisfaction. 🙌
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
              <a href="#contact" className="neon-button relative z-10 w-full sm:w-auto text-center">
                <span className="relative z-10">Get In Touch</span>
              </a>
              
              <a href="#experience" className="px-6 py-3 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>View My Work</span>
                <div className="w-5 h-5 border border-current rounded opacity-60"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          
        </div>
      </div>
    </section>;
};
export default Hero;