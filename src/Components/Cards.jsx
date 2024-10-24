import React from 'react'

const Cards = () => {
  return (
    <div className='card  h-screen  flex gap-5 px-32  items-center w-full'>
        <div className='cardcontainer h-[50vh] w-1/2'>
      <div className=' relative h-full w-full flex items-center justify-center rounded-xl bg-[#004D43]'>
        <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <div className='left-10 bottom-10 border-10 border-2 px-4 py-2 absolute rounded-full'>&copy;2019-2021</div>
      </div>
      </div>
      <div className='cardcontainer  h-[50vh] flex gap-5 w-1/2'>
        <div className=' relative w-full h-full rounded-xl items-center justify-center flex  bg-[#192826]'>
            <img className='w-40 ml-4 top-10  h-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <div className='left-4 uppercase tracking-tighter  bottom-10 border-10 border-2 px-4 py-2 absolute rounded-full'>rating 5.0 on clutch</div>
        </div>
        <div className=' relative w-full h-full flex   bg-[#192826] rounded-xl'>
            <img  className='w-28 mt-32 ml-20 top-10  h-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <div  className='left-4 uppercase whitespace-nowrap bottom-10  border-2 px-4 py-2 absolute tracking-tighter rounded-full'>business bootcamp alumni</div>
            

        </div>
      </div>
    </div>
  )
}

export default Cards
