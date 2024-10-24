import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const nav = [
    { name: "Home", path: "/" }, 
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/ourwork" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex text-["NeueMontreal"] justify-between items-center'>
      <div className='logo'>
        
      </div>
      <div className='links flex gap-10 mx-60px'>
        {nav.map((item, index) => ( 
          <Link 
            to={item.path} 
            key={index}
            className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}
            onClick={() => {
              if (item.path === '/') {
                window.scrollTo(0, 0); 
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
