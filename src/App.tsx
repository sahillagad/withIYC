import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Moduls/UI/Page/Hero';
import Home from './Moduls/UI/Page/Home';
import AOS from "aos";

import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <React.Fragment>
     <Home/>
   </React.Fragment>
  );
}

export default App;
