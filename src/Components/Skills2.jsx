export default function Skills2() {
  return (
    <>
    <div>
        <h3 className="text-center text-5xl mb-4"> SKILLS </h3>
      </div>

      <div className='w-screen p-5 grid grid-cols-3 ml-5'>

        <div className='w-100 border border-black rounded-lg shadow-md p-5 flex flex-col gap-5 bg-[#fbecd8]'>
          <p className='text-black text-center text-3xl'>Front-End Technologies</p>
          <div className='h-100 content-center rounded-lg flex items-center justify-center gap-5 flex-wrap p-4'>
            <img className="h-20 w-20" src="/src/assets/HTML_Logo.png"></img>
            <img className="h-22 w-22" src="/src/assets/CSS_Logo2.png"></img>
            <img className="h-18 w-18" src="/src/assets/JS_Logo.png"></img>
            <img className="h-20 w-50" src="/src/assets/React_Logo.png"></img>
            <img className="h-20 w-40" src="/src/assets/Tailwind_Logo.svg"></img> 
          </div>
        </div>

        
        <div className='w-100 border border-black rounded-lg shadow-md p-5 flex flex-col gap-5 bg-[#fbecd8]'>
          <p className='text-black text-center text-3xl'>Back-End Technologies</p>
          <div className='h-100 content-center rounded-lg flex items-center justify-center gap-10 flex-wrap p-4 pt-10'>
            <img className="h-20 w-40" src="/src/assets/MongoDB_Logo.png"></img>
            <img className="h-20 w-22" src="/src/assets/MySQL_Logo.png"></img>
            <img className="h-18 w-46" src="/src/assets/Express_Logo2.png"></img>
            <img className="h-20 w-22" src="/src/assets/Rest_Logo.webp"></img> 
            <img className="h-24 w-56" src="/src/assets/NodeJS_Logo.svg"></img>
          </div>
        </div>

        
        <div className='w-100 border border-black rounded-lg p-5 flex flex-col gap-5 bg-[#fbecd8]'>
          <p className='text-black text-center text-3xl'>Version Control Skills</p>
          <div className='h-100 content-center rounded-lg flex items-center justify-center gap-10 flex-wrap mt-[-60px]'>
            <img className="h-24 w-46" src="/src/assets/GitHub_logo_2.webp"></img> 
            <img className="h-18 w-36" src="/src/assets/Git_Logo2.png"></img> 
          </div>
        </div>
      </div>
    </>
  )
}