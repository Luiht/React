 const person = {
    name: 'Tony',
    age:45,
    key:'Iroman',
 };
//Desestructruracion de 'person'
 const { key, name:iromanName, age } = person;

 console.log({iromanName, age, key});

 interface Hero{
   name:string;
   age: number;
   key: string;
   rank?:string;
 }

 const useContext = ({ key, name, age, rank }: Hero) =>{
   return {
      keyName:key,
      user:{
         name,
         age,
      },
      rank: rank,
   };
 };
//Desestructuracion de 'useContext'
 const { rank, keyName, user:{ name }, } = useContext(person)


 
 console.log({rank, keyName, name})


 