import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Ourwork = () => {

  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  
  const hoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  


  const [angle, setAngle] = useState(0);
  const [irisX, setIrisX] = useState(0);
  const [irisY, setIrisY] = useState(0);
  const [blackCircleX, setBlackCircleX] = useState(0);
  const [blackCircleY, setBlackCircleY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const calculatedAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setAngle(calculatedAngle - 180);

      const irisDeltaX = mouseX - window.innerWidth / 2;
      const irisDeltaY = mouseY - window.innerHeight / 2;
      const irisDistance = Math.sqrt(irisDeltaX ** 2 + irisDeltaY ** 2);
      const irisRadius = 20;

      const blackCircleDeltaX = mouseX - window.innerWidth / 2;
      const blackCircleDeltaY = mouseY - window.innerHeight / 2;
      const blackCircleDistance = Math.sqrt(blackCircleDeltaX ** 2 + blackCircleDeltaY ** 2);
      const blackCircleRadius = 10;

      const irisNormalizedX = irisDistance > 0 ? (irisDeltaX / irisDistance) * irisRadius : 0;
      const irisNormalizedY = irisDistance > 0 ? (irisDeltaY / irisDistance) * irisRadius : 0;

      const blackCircleNormalizedX = blackCircleDistance > 0 ? (blackCircleDeltaX / blackCircleDistance) * blackCircleRadius : 0;
      const blackCircleNormalizedY = blackCircleDistance > 0 ? (blackCircleDeltaY / blackCircleDistance) * blackCircleRadius : 0;

      setIrisX(irisNormalizedX);
      setIrisY(irisNormalizedY);
      setBlackCircleX(blackCircleNormalizedX);
      setBlackCircleY(blackCircleNormalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
     <div>
     <section className='h-screen '>
    <div className="h-screen w-full">
      
      <div className="h-3/4 w-full bg-[#CDEA68] flex justify-center items-center relative overflow-hidden">
      <div>
        <h1 className=' left-0  text-[8vw] tracking-tighter leading-none font-extrabold uppercase text-black pr-[800px]'>work</h1>
      </div>
        <div className="absolute flex justify-center items-center gap-8 bottom-[-7vw]">
          <div className="h-[14vw] w-[14vw] flex justify-center items-center bg-white rounded-full">
            <div
              style={{ transform: `translate(${blackCircleX}px, ${blackCircleY}px)` }}
              className="relative h-[8vw] w-[8vw] bg-black rounded-full"    >
             
              <div
                style={{
                  transform: `translate(${irisX}px, ${irisY}px) translate(-50%, -50%) rotate(${angle}deg)`,
                  zIndex: 1, 
                }}
                className="absolute w-4 h-4 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
            </div>
          </div>

          <div className="h-[14vw] w-[14vw] flex justify-center items-center bg-white rounded-full">
            <div
              style={{ transform: `translate(${blackCircleX}px, ${blackCircleY}px)` }}
              className="relative h-[8vw] w-[8vw] bg-black rounded-full"
            >
             
              <div
                style={{
                  transform: `translate(${irisX}px, ${irisY}px) translate(-50%, -50%) rotate(${angle}deg)`,
                  zIndex: 1, 
                }}
                className="absolute w-4 h-4 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" ></div>
            </div>
          </div>
        </div>
       
    
      </div>
      
      <div className='h-1/4 w-full'>
        <h1 className='text-5xl pt-8 pl-8 tracking-wider'>Purpose driven, 
          <span className='underline'>   strategy-led 
          presentations</span> <br/>
        that people care about.</h1>
      </div>
      

      </div>
      </section>
     <div className='border-t-[1px] w-screen border-zinc-400 px-24 py-5   flex gap-10  '>
      <section className='h-screen '>



 
  <div className="w-full py-20">
   

    <div className="px-20">
      <div className="cards flex w-full h-full gap-10 mt-10">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => hoverEnd(0)}
          className="cardcontainer relative w-1/2 h-[75vh]"
        >
          <h1 className="right-0 flex overflow-hidden absolute text-[#CDEA68] whitespace-nowrap uppercase left-[10%] top-1/2 -translate-y-1/2 z-[9] font-bold leading-none tracking-tighter text-5xl">
            {"CARDBOARD SPACESHIP".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="h-full w-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => hoverEnd(1)}
          className="cardcontainer relative w-1/2 h-[75vh]"
        >
          <h1 className="right-0 absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap uppercase left-[10%] top-1/2 -translate-y-1/2 z-[9] font-bold leading-none tracking-tighter text-5xl">
            {"AH2 & MATTHORN".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="h-full w-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>

      </section>
     </div>
    
    </div>
  );
};

export default Ourwork;




