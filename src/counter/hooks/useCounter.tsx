<<<<<<< HEAD
import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Values
    counter,

    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
=======
import { useState } from "react";

export const useCounter = (initialValue:number=10) => {
    const [counter, setCounter]= useState(initialValue)

    const handleAdd = () => {
        setCounter( counter +1)
    };

    const handleSubtract = () =>{
        setCounter(counter-1)
    }

    const handleReset = () =>{
        setCounter(5)
    }

  return{
    // values
    counter,
    
    // Accions
    handleAdd,
    handleSubtract,
    handleReset
    

}
}
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
