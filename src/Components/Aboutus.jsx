import React from 'react'
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';



const Aboutus = () => {
  return (
    <div className='w-full h-screen pt-1'>
          <div className='textstructure mt-52  px-20'>
                {["We are", "OCHI-DESIGN"].map((item, index) => {
                    return (
                        <div className='markers' key={index}>
                            <div className='w-fit flex items-end flex-nowrap'>
                                {index === 1 && (
                                    <motion.div 
                                    initial={{width:0}}
                                    animate={{width:"8vw"}}
                                    transition={{
                                        ease:[0.76, 0, 0.24, 1],
                                    duration:2
                                }}
                                    className='w-[5em] h-[4.2vw] rounded-md relative mr-4'>
                                <img  className=' rounded-xl' src={logo} alt="" />
                                    </motion.div>
                                )}
                                <h1 className='uppercase text-[6vw] leading-[5vw] tracking-[-0.05em] font-medium whitespace-nowrap'>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='mt-32 border-t-[1px] w-screen border-zinc-400 px-24 py-5   flex gap-40'>
                <div className='w-1/2 '>
                <h1>About us:</h1></div>
                <div className='w-1/2 ml-[500px] '><p>
                In Ukrainian, ochi - means eyes. <br/>
                It's not just a beautiful word,<br/>
                 but our philosophy. Almost everything 
                 <br/>that needs to be 
                 communicated is better 
                 <br/>shown than explained.</p></div>

            </div>
      
    </div>
  )
}

export default Aboutus

