import React, { useState, useEffect } from "react";
import img1 from "/src/assets/ZOYA_RHCSA.jpeg"
import img2 from "/src/assets/ZOYA_Guvi.png"
import img3 from "/src/assets/ZOYA_GSSoC.png"

const customFontStack = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
const accentColor = '#CC4444'; // A vibrant red/coral color for the main text
const mainBg = '#FAF8F5';   

export default function Certifications() {

  const StarSVG = ({ fillColor, className = "" }) => (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill={fillColor}/>
    </svg>
  );
  const backgroundStyle = {
    backgroundColor: accentColor,
    backgroundImage: `radial-gradient(${accentColor} 0.5px, ${accentColor} 0.5px)`,
    backgroundSize: '15px 15px', 
    padding: '50px 0'
  };

  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <>
    <div style={backgroundStyle} className="font-sans antialiased relative overflow-hidden">

        {/* Top-Left Star */}
        <div className='absolute top-8 right-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>
        <div className='absolute bottom-8 right-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>

      <h1 className="leading-[0.85] tracking-tight mb-6" style={{ color: mainBg, fontFamily: customFontStack , textAlign:'center'}}>
              <span className="text-2xl md:text-4xl lg:text-5xl block font-extrabold mb-4 mt-4">CERTIFICATES</span>
      </h1>


      <div className="relative flex items-center justify-center w-screen h-100">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`cert-${index}`}
            className={`absolute w-110 h-80 object-cover rounded-xl shadow-lg transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-4 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

        <div className='absolute bottom-4 left-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>
        <div className='absolute top-4 left-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>
    </div>
    </>
  );
}
