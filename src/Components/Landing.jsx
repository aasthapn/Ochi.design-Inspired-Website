import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate= useNavigate();
    const click =()=>{
        navigate('/contact')
    };
    
    return (
        <div  data-scroll  data-scroll-speed="-.3" className='bg-zinc-900 w-full h-screen pt-1'>
            <div className='textstructure mt-52 px-20'>
                {["We Create", "EYE-Opening", "Presentations"].map((item, index) => {
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
                                    className='w-[5em] h-[4.4vw] rounded-md relative mr-4'>
                                <img  className=' rounded-xl' src={logo} alt="" />
                                    </motion.div>
                                )}
                                <h1 className='uppercase text-[5.5vw] leading-[5vw] tracking-[-0.05em] font-medium whitespace-nowrap'>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className='border-t-[1px] border-zinc-800 mt-[92px] flex justify-between items-center px-20 py-5'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none' key={index}>
                        {item}
                    </p>
                ))}
                <div className='start flex items-center gap-5'>
                    <button onClick={click} className='hover:bg-white hover:text-black px-5 py-2 border-[2px] border-zinc-500 font-light text-sm rounded-full'>
                        START THE PROJECT
                    </button>
                    <div className='w-10 h-10 flex items-center justify-center px-70 border-[2px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing; 




