import React, { useState } from 'react';
import './Project.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import ImageIcon from '@mui/icons-material/Image';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export default function Projects(){
    const [activeTab, setActiveTab] = useState('MajorProjects');

    const MajorProjects = [
    {
      title: 'Travel Genie',
      description: 'A MERN Stack website to provide user with custom itinerary options with Ai recommended places',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI API'],
      github: 'https://github.com/ZoyaYusuf/TravelGenie_FrontEnd',
      live: 'https://travel-genie-itinerary.vercel.app/'
    },
    {
      title: 'Domora',
      description: 'An Airbnb like Website with user authentication, house listing options and finding rental places.',
      tech: ['EJS', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ZoyaYusuf/Domora',
      live: 'https://domoraa.onrender.com/'
    },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for tracking social media metrics with data visualization, reporting, and export functionality.',
    //   tech: ['React', 'Express', 'MongoDB', 'Chart.js', 'JWT'],
    //   github: '#',
    //   live: '#'
    // },
    // {
    //   title: 'Blog Platform',
    //   description: 'Modern blogging platform with markdown support, commenting system, and content management capabilities.',
    //   tech: ['React', 'Node.js', 'MongoDB', 'Express', 'TinyMCE'],
    //   github: '#',
    //   live: '#'
    // }
  ];

    const MinorProjects = [
    {
      title: 'Image Slider', 
      description: 'A Vanilla JS image Slider',
      github: 'https://github.com/ZoyaYusuf/IMAGE_SLIDER',
      live: 'https://zoyayusuf.github.io/IMAGE_SLIDER/'
    },
    {
      title: 'Using GSAP', 
      description: 'A Demo website showcasing use of GSAP library',
      github: 'https://github.com/ZoyaYusuf/TWO-GOOD-CO_CLONE',
      live: 'https://gsap-tesing.vercel.app/'
    },
    {
      title: 'Calculator', 
      description: 'A basic calculator using JS',
      github: 'https://github.com/ZoyaYusuf/CALCULATOR',
      live: 'https://calculator-sand-sigma-33.vercel.app/'
    },
    {
      title: 'Simon Says Game', 
      description: 'A playful Simon Says Game using JS',
      github: 'https://github.com/ZoyaYusuf/SIMONS_GAME',
      live: 'https://simons-game-chi.vercel.app/'
    }
    // {
    //   title: 'Weather API', 
    //   description: 'Use of Weather API to show Weather details of a city',
    //   github: 'https://github.com/ZoyaYusuf/WeatherApp_React',
    //   live: 'https://travel-genie-itinerary.vercel.app/'
    // }
  ];

  const customFontStack = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
const accentColor = '#CC4444'; // A vibrant red/coral color for the main text
const mainBg = '#FAF8F5';      // The light, off-white background

    const backgroundStyle = {
    backgroundColor: mainBg,
    backgroundImage: `radial-gradient(${accentColor} 0.5px, ${mainBg} 0.5px)`,
    backgroundSize: '15px 15px', 
    padding: '80px 0',
  };
    return(  
    <>
          <div style={backgroundStyle} className="font-sans antialiased relative overflow-hidden">

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('MajorProjects')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'MajorProjects'
                  ? 'bg-[#CC4444] text-[#FAF8F5] hover:bg-[#811111ff]'
                  : 'bg-[#FAF8F5] text-[#CC4444] border border-[#CC4444]'
              }`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setActiveTab('MinorProjects')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'MinorProjects'
                  ? 'bg-[#CC4444] text-[#FAF8F5] hover:bg-[#811111ff]'
                  : 'bg-[#FAF8F5] text-[#CC4444] border border-[#CC4444]'
              }`}
            >
              Minor Projects
            </button>
          </div>

          {/* MajorProjects Tab */}
          {activeTab === 'MajorProjects' && (
            <div className="grid md:grid-cols-2 gap-6">
              {MajorProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-[#FAF8F5] rounded-xl p-6 border border-[#CC4444] transition-all duration-300 hover:shadow-lg hover:border-red-500 hover:shadow-red-500/20"
                >
                  <h3 className="text-2xl font-bold text-[#CC4444] mb-3">{project.title}</h3>
                  <p className="text-black mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-[#CC4444] text-[#FAF8F5] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-[#811111ff] hover:text-black transition-colors"
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-[#811111ff] hover:text-black transition-colors"
                    >
                      <LanguageIcon sx={{ fontSize: 18 }} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MinorProjects Tab */}
          {activeTab === 'MinorProjects' && (
            <div className="grid md:grid-cols-2 gap-6">
              {MinorProjects.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-[#FAF8F5] rounded-xl p-6 border border-[#CC4444] transition-all duration-300 hover:shadow-lg hover:border-red-500 hover:shadow-red-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#CC4444] rounded-lg">
                      <AccountTreeIcon className="text-[#FAF8F5]" sx={{ fontSize: 24 }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#CC4444] mb-1">{cert.title}</h3> 
                      <p className="text-black text-sm mb-2">{cert.description}</p> 
                      <div className="flex gap-4">
                    <a 
                      href={cert.github}
                      className="flex items-center gap-2 text-[#811111ff] hover:text-black transition-colors"
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a 
                      href={cert.live}
                      className="flex items-center gap-2 text-[#811111ff] hover:text-black transition-colors"
                    >
                      <LanguageIcon sx={{ fontSize: 18 }} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
    );
}