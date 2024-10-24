import React from 'react'
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa97a655-7f7a-4d18-b6b4-80067ca534fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return ( 
    <div>
        <section className='h-full'> 
    <div className=' w-full pt-1'>

           <div className='textstructure mt-52  px-20'>
                {["let's start ", "a project together"].map((item, index) => {
                    return (
                        <div className='markers' key={index}>
                            <div className='w-fit flex  items-end flex-nowrap'>
                                {index === 0 && (
                                    <motion.div 
                                    initial={{width:0}}
                                    animate={{width:"8vw"}}
                                    transition={{
                                        ease:[0.76, 0, 0.24, 1],
                                    duration:2
                                }}
                                    className='w-[5em] h-[4.2vw] mb-6  rounded-md relative mr-4'>
                                <img  className=' rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Asset-41-20-300x203.jpg" alt="" />
                                    </motion.div>
                                )}
                                <h1 className='uppercase text-[5vw]  m-2 leading-[5vw] tracking-[-0.05em]  font-medium whitespace-nowrap'>
                                    {item}
                                </h1>
                            </div>
                        </div>

                    );
                })}
            </div>
            </div>
            
           
            <div className='border-t-[1px] border-zinc-800 mt-[92px]  px-20 py-5'>
            
              <div>
                <p className='text-1xl'>Fill the form below:</p>
                </div >
                <div >
                <form onSubmit={onSubmit} >
                    <div className='mt-16 text-6xl '>
                    <div>
                    <p>Hi! My name is <span ><input name='name' type="text" placeholder='Enter your name*' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span>
                    and I work with <span ><input name='company name' type="text" placeholder='Company name *' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span>
</p>
                    </div>
                    <div className='pt-2'>
                        <p>I’m looking for a partner to help me with<span ><input name='goal' type="text" placeholder='Your goal type here*' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span></p>
                    </div>
                    <div className='pt-2'>
                        <p>With an idea of having that completed<span ><input   name='date' type="date" placeholder='date*' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span></p>
                    </div>
                    <div className='pt-2 whitespace-nowrap'>
                        <p>I am hoping to stay around a budget range of<span ><select name='range' type="text" placeholder='select*' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' >
                        <option value="" disabled selected hidden>Select*</option>
                           <option value="$5,000-$15,000">$5,000-$15,000</option>
                           <option value="$15,000-$25,000">$15,000-$25,000</option>
                           <option value="$25,000-$50+,000">$25,000-$50+,000</option>

                            </select>
                            </span></p>
                    </div>
                    <div className='pt-2 whitespace-nowrap'>
                        <p>You can reach me at
                  <span ><input name='email' type="text" placeholder='name@example.com' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span>
                    
            to start the conversation.</p>
            </div>
            <div className='pt-2 whitespace-nowrap'>
                        <p>Optionally, i’m sharing more:


                  <span ><input name='product details' type="text" placeholder='products details' className='bg-zinc-900 border-b-2  pl-5 border-zinc-400 text-sm  text-white placeholder:to-black  ' /></span>
                    </p>

                    </div>
                    </div >
                    <div className='flex justify-end'>
                <button className=' mt-12 right-0 px-6 py-2 bg-white text-black rounded-full'>Send Enquiry</button>
                </div>
                </form>
                <span>{result}</span>
                </div> 
                
           </div>
            </section>
            
    
    </div>
  )
}

export default Contact

