<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GifsApp } from './GifsApp';
// import { MyCounterApp } from './counter/components/MyCounterApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
    {/* <MyCounterApp /> */}
  </StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './GifsApp'
// // import { GifsApp } from './GifsApp'
import { MyCounterApp } from './counter/components/MyCounterApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GifsApp/> */}
     <MyCounterApp /> 
  </StrictMode>,
)
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
