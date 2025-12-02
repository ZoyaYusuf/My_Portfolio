import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const customFontStack = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
const accentColor = '#CC4444'; // A vibrant red/coral color for the main text
const mainBg = '#FAF8F5';   

export default function Skills() {

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

  return (
    
    <>
    <div style={backgroundStyle} className="font-sans antialiased relative overflow-hidden">

        {/* Top-Left Star */}
        <div className='absolute bottom-4 right-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>

      <h1 className="leading-[0.85] tracking-tight mb-6" style={{ color: mainBg, fontFamily: customFontStack , textAlign:'center'}}>
              <span className="text-4xl md:text-5xl lg:text-6xl block font-extrabold mb-4 mt-4">SKILLS</span>
      </h1>


        <div className='w-screen grid grid-rows-2'>
          <div className='w-screen p-5 flex align-items-center justify-items-center gap-5 justify-center'>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/HTML_Logo.png"></img>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/CSS_Logo2.png"></img>
            <img className="h-16 w-22 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-1" src="/src/assets/JS_Logo.png"></img>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/React-icon.svg.png"></img>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-1" src="/src/assets/Bootstrap_Logo.png"></img>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/Rest_Logo.webp"></img> 
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/MySQL_Logo.png"></img>
            <img className="h-16 w-16 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/Git_Logo.svg"></img> 
          </div>
          <div className='w-screen p-5 flex align-items-center justify-items-center gap-5 justify-center'>  
            <img className="h-16 w-36 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/Git_Logo2.png"></img> 
            <img className="h-16 w-36 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/Tailwind_Logo.svg"></img> 
            <img className="h-16 w-36 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/NodeJS_Logo.svg"></img>
            <img className="h-16 w-50 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/Express_Logo2.png"></img>
            <img className="h-16 w-36 bg-[#FAF8F5] rounded-lg transition duration-160 shadow-md shadow-[#EB3678] border border-[#121a1f] p-2" src="/src/assets/MongoDB_Logo.png"></img>
          </div> 
        </div>  
        </div>

        <div className='absolute bottom-4 left-4 z-10'>
            <StarSVG fillColor={mainBg} />
        </div>
    </>
  )
}