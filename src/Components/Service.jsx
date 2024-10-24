import React from 'react'

const Service = () => {
    return (
        <div className='bg-black min-h-screen'>  
            <div className='w-full min-h-screen font-["Neue Montreal"] flex flex-col'>
                
                <div className='w-full h-auto flex-1'> 
                    <h1 className='text-9xl uppercase pt-40 pl-14 font-extrabold'>services</h1>
                </div>

                
                <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-12"></div>
                
                
                <div className='w-full flex-1'> 
                    <p className='text-[2.8vw]  ml-10 leading-[3.4vw]'>
                        We create <span className='underline'>eye-catching</span> and <span className='underline'>eye-opening</span><br />
                        presentations that educate, inspire, and influence action.
                    </p>
                    <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-12"></div>

                    <div className='w-full h-full flex'> 
                        <div className='w-1/2'>
                            <div className=' underline text-1xl ml-10 mt-2'>We do this by following<br />a simple approach:</div>
                        </div>

                        
                        <div className='w-1/3'>
                            <span className='underline mt-2'>Goal defines it all</span>
                            <p className='mt-3'>
                                What do you want to achieve? Understanding <br/>the purpose of your presentation <br/>allows us to tailor it.
                            </p>
                        </div>

                        <div className='w-1/3 ml-10'>
                            <span className='underline mt-2'>Context makes a difference</span>
                            <p className='mt-3'>
                                When do you present? Online or live? At a <br/>sales meeting, at a conference, <br/>or just sending a cold email?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
