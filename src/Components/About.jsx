import React from 'react'
import img1 from '../assets/img1.jpg'; 
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  const click=()=>{
    navigate('/about')
  };
  return (
    <div  data-scroll
    data-scroll-section
    data-scroll-speed="-.3"  className='  bg-[#CDEA68]'> 
      <div  className="w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black">
        <h1 className='font-["Neue Montreal"] text-[3.8vw] leading-[3.4vw]'>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <span className='underline'>raise
          funds, sell products, explain complex ideas,</span>
          and <span className='underline'>hire great people.</span>
        </h1>
      </div>

      <div className='border-t-[1px] w-screen border-zinc-400 px-20 py-5 font-["Neue Montreal"] text-[1.1vw]   bg-[#CDEA68] text-black  '>
        <div className='flex justify-between items-start  '>
          <div>
            <p>What you can expect:</p>
          </div>
          <div className='max-w-[30%]'>
            <p>
              We create tailored presentations to help you persuade your colleagues, 
              clients, or investors. Whether it's live or digital, 
              delivered for one or a hundred people.
            </p>
            <br/>
            <br/>
            <p>
              We create tailored presentations to help you persuade your colleagues, 
              clients, or investors. Whether it's live or digital, 
              delivered for one or a hundred people.
            </p>
      
          </div>
         
        </div>
      </div>
      <div className='border-t-[1px] w-screen border-zinc-400 px-20 py-5 font-["Neue Montreal"]  flex gap-10 text-[1.1vw]   bg-[#CDEA68] text-black  '>
        <div className='w-1/2'>
         <h1 className='text-6xl tracking-tighter pt-4 pl-2'> Our apporach:</h1>
          <button onClick={click} className='flex items-center  gap-6 uppercase px-10 py-4 bg-zinc-900 text-white rounded-full mt-11 '>Read More
          <div className='w-2 h-2 rounded-full bg-zinc-100'></div>

          </button>
        </div>
        <div className='w-1/2  h-[80vh] pt-4 '>
        <img src={img1} alt="" className='rounded-lg h-[510px] w-[950px]' /></div>
      </div>
    </div>
  )
}

export default About; 

// import React from 'react';
// import img1 from '../assets/img1.jpg';

// const About = () => {
//   return (
//     <div className='w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl'>
//       <div
//         className='p-20 sticky top-0 z-10'
//         style={{ backgroundColor: "#CDEA68" }} // Ensure it has a background
//       >
//         <h1 className='font-["Neue Montreal"] text-[3.8vw] leading-[3.4vw]'>
//           Ochi is a strategic presentation agency for forward-thinking businesses that need to
//           <span className='underline'> raise funds, sell products, explain complex ideas,</span> and
//           <span className='underline'> hire great people.</span>
//         </h1>
//       </div>

//       {/* Container for border and content */}
//       <div className='border-t-[1px] border-zinc-400 px-20 py-5 text-black text-[1.1vw]'>
//         <div className='flex justify-between items-start'>
//           <div>
//             <p>What you can expect:</p>
//           </div>
//           <div className='max-w-[30%]'>
//             <p>
//               We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
//             </p>
//             <br />
//             <p>
//               We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className='border-t-[1px] border-zinc-400 px-20 py-5 flex gap-10 text-[1.1vw]'>
//         <div className='w-1/2'>
//           <h1 className='text-6xl tracking-tighter pt-4 pl-2'>Our approach:</h1>
//           <button className='flex items-center gap-6 uppercase px-10 py-4 bg-zinc-900 text-white rounded-full mt-11'>
//             Read More
//             <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
//           </button>
//         </div>
//         <div className='w-1/2'>
//           <img src={img1} alt='' className='rounded-lg h-[510px] w-[950px]' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
