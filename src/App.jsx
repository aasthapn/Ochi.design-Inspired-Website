import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marque from './Components/Marque';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Start from './Components/Start';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Service from './Components/Service';
import Ourwork from './Components/Ourwork';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Scroll from './Components/Scroll';

const router = createBrowserRouter([

  {
    path: "/",
    element: <> <Navbar /> <Landing /> <Marque /> <About/> <Eyes /> <Featured /> <Cards /> <Start /> <Footer />  </>
  },
  {
    path: "/services",
    element: <> <Navbar /> <Service/> </>
  },
  {
    path:"/ourwork",
    element:<> <Navbar/> <Ourwork/> </>
  },
  {
    path:"/about",
    element:<> <Navbar/> <Aboutus/> </>
  },
  {
    path:"/contact",
    element:<> <Navbar/> <Contact/> </>
  }
]);

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <RouterProvider router={router}>
      <Scroll/>
      </RouterProvider  >

    </div>
  );
};


export default App;
