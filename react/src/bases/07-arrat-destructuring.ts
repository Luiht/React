const characterNames = ['Goku','Vegeta','Trunks'];

//Desestructura en orden
const [,,p3] = characterNames;

console.log({p3});


const returnsArraysFn = () => {
    return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArraysFn();
console.log(numbers, letters)


 const useState = (value: string) => {
    return [value, (newValue:string) =>{
        console.log(newValue);
     },
    ]as const;
 };