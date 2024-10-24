import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const hoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-['NeueMontreal'] text-6xl font-normal tracking-tighter">
          Featured projects
        </h1>
      </div>

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
  );
};

export default Featured;
