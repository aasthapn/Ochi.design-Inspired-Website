import React, { useEffect, useState } from 'react';

const Eyes = () => {
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
      setAngle(calculatedAngle-180);

      const irisDeltaX = mouseX - window.innerWidth / 2;
      const irisDeltaY = mouseY - window.innerHeight / 2;
      const irisDistance = Math.sqrt(irisDeltaX ** 2 + irisDeltaY ** 2);
      const irisRadius = -0.2; 

      
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
    <div className=' h-screen overflow-x-hidden hide-scrollbar'>
      <div data-scroll data-scroll-speed="-.5" className='  relative flex justify-center items-center  h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex items-center justify-center gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='h-[14vw] w-[14vw] flex justify-center items-center bg-white rounded-full'>
            <div
              style={{
                transform: `translate(${blackCircleX}px, ${blackCircleY}px)`,
              }}
              className='relative h-[8vw] w-[8vw] bg-black rounded-full'         >
                  <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-semibold text-white">PLAY</p>
                </div>
              <div
                style={{
                  transform: `translate(${irisX}px, ${irisY}px) translate(-50%, -50%) rotate(${angle}deg)`,
                }}
                className='absolute line w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'  >
                <div className='h-5 w-5 bg-white rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='h-[14vw] w-[14vw] flex justify-center items-center bg-white rounded-full'>
            <div
              style={{
                transform: `translate(${blackCircleX}px, ${blackCircleY}px)`,
              }}
              className='relative h-[8vw] w-[8vw] bg-black rounded-full'    >
                  <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-semibold text-white">PLAY</p>
                </div>
              <div
                style={{
                  transform: `translate(${irisX}px, ${irisY}px) translate(-50%, -50%) rotate(${angle}deg)`,
                }}
                className='absolute line w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'      >
                <div className='h-5 w-5 bg-white rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;