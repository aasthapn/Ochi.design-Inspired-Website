import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Start = () => {
  const navigate= useNavigate()
  const click=()=>{
    navigate('/contact')
  }
  const fun=()=>{
    navigate('/ourwork')
  };
  const [angle, setAngle] = useState(0);
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

      const blackCircleDeltaX = mouseX - window.innerWidth / 2;
      const blackCircleDeltaY = mouseY - window.innerHeight / 2;
      const blackCircleDistance = Math.sqrt(blackCircleDeltaX ** 2 + blackCircleDeltaY ** 2);
      const blackCircleRadius = 5;

      const blackCircleNormalizedX = (blackCircleDeltaX / blackCircleDistance) * blackCircleRadius;
      const blackCircleNormalizedY = (blackCircleDeltaY / blackCircleDistance) * blackCircleRadius;
      setBlackCircleX(blackCircleNormalizedX);
      setBlackCircleY(blackCircleNormalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-screen bg-[#CDEA68] text-["NeueMontreal"]  flex flex-col justify-center items-center relative'>
 
      <div className='absolute top-1/4 flex gap-8'>
       
        <div className='relative h-[8vw] w-[8vw] flex justify-center items-center bg-white rounded-full'>
          <div
            style={{ transform: `translate(${blackCircleX}px, ${blackCircleY}px)` }}
            className='relative h-[6vw] w-[6vw] bg-black rounded-full'>
            
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
              className='absolute w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'  >
              <div className='h-2 w-2 bg-white rounded-full'></div>
            </div>
          </div>
        </div>

        
        <div className='relative h-[8vw] w-[8vw] flex justify-center items-center bg-white rounded-full'>
          <div
            style={{ transform: `translate(${blackCircleX}px, ${blackCircleY}px)` }}
            className='relative h-[6vw] w-[6vw] bg-black rounded-full'>
         
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
              className='absolute w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'  >
              <div className='h-2 w-2 bg-white rounded-full'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center py-28'>
        <div className='text-black text-9xl uppercase font-bold'>ready </div>
        <div className='text-black text-9xl uppercase font-bold'>to start</div>
        <div className='text-black text-9xl uppercase font-bold'>the project?</div>
      </div>

      <div className='flex flex-col items-center py-2 mb-24'>
        <button onClick={click} className='bg-black text-white  border-black border-2 rounded-full px-10 py-4 uppercase'>
          start the project
        </button>
        <span className='text-black  text-xl font-normal'>OR</span>
        <button onClick={fun} className='hover:bg-black hover:text-white text-black border-black border-2 rounded-full uppercase px-10 py-4 '>
          hello@ochi.design
        </button>
      </div>
    </div>
  );
};

export default Start;
