import React, { useEffect, useRef } from 'react';
import Header from './Components/Header/Header';
import './App.scss';
import Projects from './Components/Project/Projects';
import createScrollSnap from 'scroll-snap';


export default function App() {
    const container = useRef();

    useEffect(() => {
        const { bind, unbind } = createScrollSnap(container.current, {
            snapDestinationX: '0%',
            snapDestinationY: '100vh',
            timeout: 100,
            duration: 200,
            threshold: 0.3,
            snapStop: false,
          })
          

          return function reset(){
              unbind();
          }
    },)

    return <div ref={container} className='page'>
    <Header/>
    <Projects/>
   
    </div>
};
