import  { useState } from 'react'
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  return (
    <>
    {/* <ToastContainer autoClose={1000} draggable /> */}
    <div className='flex  justify-between items-center backdrop-blur-sm bg-white h-20 w-[100%] text-[18px] text-[#000000] px-10'>
       
    
<div>
    <img className='w-40 h-30 z-50' src="/logo_mmm.png" alt="logo" />

</div>

<div className='hidden lg:block'>
<ul className='  flex items-center text-prett font-bold justify-center gap-20 cursor-pointer'> 
<a href="#home">  <li>HOME</li></a>
  <a href="#artists"><li>ARTISTS</li></a>
 <a href="#releases"> <li>RELEASES</li></a>
 <a href="#events"> <li>EVENTS</li></a>
 <a href="#social"> <li>SOCIAL</li></a>
 <a href="#about"> <li>ABOUT</li></a> 
</ul>
</div>

 <button  className="border-2 hidden lg:block border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
             <a href="#contact">📞 | ✉️ </a>
            </button>

             <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-orange-200 hover:text-orange-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

{/* <Bars3Icon className="h-10 w-10 text-gray-800" /> */}

    </div>

     {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/30 backdrop-blur-xl border-t border-orange-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Home</li></a>
              <a href="#artists" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Artists</li></a>
              <a href="#releases" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Releases</li></a>
              <a href="#events" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Events</li></a>
              <a href="#social" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Social</li></a>
              <a href="#about" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>About</li></a>
              <a href="#contact" className="text-orange-200 hover:text-orange-400 block px-3 py-2 text-base font-medium"><li className='list-none' onClick={()=>setIsMenuOpen(false)}>Contact</li></a>
            </div>
          </div>
        )}

    </>
  )
}

export default Navbar