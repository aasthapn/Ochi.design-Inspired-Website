// import { motion } from 'framer-motion'
// import React from 'react'

// const Marque = () => {

//   return (
//     <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-2xl rounded-tx-2xl bg-[#004D43]'>
//       <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
//         <motion.h1 
//         initial={{x:"0"}}
//         animate={{x:"-100%"}}
//         transition={{repeat:Infinity,ease:"linear",duration:"5"}} 
//         className=' text-[19vw] leading-none uppercase font-bold pr-20   -mb-0 word-tighter'>we are ochi</motion.h1>
//         <motion.h1
//         initial={{x:"0"}}
//         animate={{x:"-100%"}}
//         transition={{repeat:Infinity,ease:"linear",duration:"5"}} 
//          className=' text-[19vw] leading-none uppercase font-bold pr-20  -mb-0 word-tighter' >we are ochi</motion.h1>
//           <motion.h1
//         initial={{x:"0"}}
//         animate={{x:"-100%"}}
//         transition={{repeat:Infinity,ease:"linear",duration:"5"}} 
//          className=' text-[19vw] leading-none uppercase font-bold  pr-20 -mb-0 word-tighter' >we are ochi</motion.h1>

//       </div>
//     </div>
//   )
// }

// export default Marque



import { motion } from 'framer-motion';
import React from 'react';

const Marque = () => {
  return (
    <div>
      
      <div
        data-scroll
        
        data-scroll-speed=".1"
        className='w-full h-screen flex items-center justify-center bg-[#004D43]' 
        style={{ marginBottom: 0 }}  
      >
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className='text-[19vw] leading-none uppercase font-bold pr-20 word-tighter'
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            className='text-[19vw] leading-none uppercase font-bold pr-20 word-tighter'
          >
            we are ochi
          </motion.h1>
        </div>
      </div>

      
    </div>
  );
};

export default Marque;
