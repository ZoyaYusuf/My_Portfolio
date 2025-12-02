import React from 'react';

// Use a custom font stack that leans towards a bold, modern serif style
const customFontStack = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
const accentColor = '#CC4444'; // A vibrant red/coral color for the main text
const mainBg = '#FAF8F5';      // The light, off-white background

// URLs for the new social links - Remember to replace '#' with your actual links!
const LINKEDIN_URL = "https://www.linkedin.com/in/zoya-yusuf/"; 
const GITHUB_URL = "https://github.com/ZoyaYusuf"; 

const HeroSection = () => {

  // Inline style for the subtle dotted pattern background
  const backgroundStyle = {
    backgroundColor: mainBg,
    backgroundImage: `radial-gradient(${accentColor} 0.5px, ${mainBg} 0.5px)`,
    backgroundSize: '15px 15px', 
    padding: '80px 0',
  };

  return (
    <div style={backgroundStyle} className="font-sans antialiased relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-4 md:mt-20">
          
          {/* LEFT SIDE: HELLO I'M ZOYA (Large Text) - Takes 7/12 width */}
          <div className="md:col-span-7">
            
            {/* Main Typographic Element */}
            <h1 className="leading-[0.85] tracking-tight mb-6" style={{ color: accentColor, fontFamily: customFontStack }}>
              <span className="text-6xl md:text-7xl lg:text-8xl block font-extrabold">HELLO</span>
              <span className="text-6xl md:text-7xl lg:text-8xl block font-extrabold mb-4 mt-4">I'M</span>
              <span className="text-9xl md:text-[10rem] lg:text-[12rem] block font-extrabold mt-4">ZOYA</span>
            </h1>
            
            <div className='mt-16 md:mt-24 space-y-6 hidden md:block'>
              {/* This empty block ensures the right column content aligns visually with the main name block */}
            </div>

          </div> 
          
          {/* RIGHT SIDE: TITLE BOX, BIO, AND SOCIAL LINKS - Takes 5/12 width */}
          <div className="md:col-span-5 flex flex-col space-y-8 pt-4 md:pt-0">
            
            {/* Title Box - Adjusted to align correctly */}
            <div 
              className="bg-black text-white p-3 inline-block rounded-lg shadow-xl w-fit mb-4"
              style={{ fontFamily: customFontStack }}
            >
              <span className="text-3xl md:text-4xl font-semibold tracking-wide uppercase">MERN DEVELOPER</span>
            </div>
            
            {/* Bio Text */}
            <div className='text-black text-lg leading-relaxed text-justify'>
              <p>
                As a passionate Full-Stack MERN Developer, I specialize in crafting robust, performant, and scalable web applications. My focus is on delivering exceptional user experiences (UX) through clean React architecture while ensuring the backend (Node.js/Express, MongoDB) is modular, secure, and highly maintainable. I thrive on translating complex requirements into elegant, real-world solutions.
              </p>
            </div>
            
            {/* Social Links (My LinkedIn / My Github) */}
            <div className='space-y-6 mt-2'>
              
              {/* LinkedIn Link */}
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center w-fit space-x-2 transition-transform duration-300 hover:translate-x-1" // Added flex, items-center, space-x-2, and hover effect
              >
                <svg className="w-5 h-5 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <div className='text-lg font-medium tracking-widest uppercase transition-colors duration-300' style={{ color: accentColor }}>
                  My LinkedIn
                </div>
                {/* Simple Right Arrow SVG - Replaced the underline SVG with a standard right-arrow icon */}
              </a>

              {/* Github Link */}
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center w-fit space-x-2 transition-transform duration-300 hover:translate-x-1" // Added flex, items-center, space-x-2, and hover effect
              >
                 {/* Simple Right Arrow SVG - Replaced the underline SVG with a standard right-arrow icon */}
                <svg className="w-5 h-5 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <div className='text-lg font-medium tracking-widest uppercase transition-colors duration-300' style={{ color: accentColor }}>
                  My Github
                </div>
              </a>
            </div>
            
            
            {/* Decorative Element */}
            <div className='flex justify-end pt-8'>
              <svg className='w-8 h-8' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill={accentColor}/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;