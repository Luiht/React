import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FristStepsApp } from './FristStepsApp';
import { MyAwesomeApp } from './MyAwesomeApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FristStepsApp/>
    {/* <MyAwesomeApp/> */}
  </StrictMode>
);
