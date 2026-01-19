function greet(name: string):  string{
    return `Hola ${name}`
}


const greet2 = (name:string) => `Hola ${name}`;
const message = greet('Goku');
const message2 = greet2('Vegeta');


console.log(message, message2)

// Define como tiene que ser el usuario sin ser obligatorio
interface User{
      uid:'ABC-123',
    username:'Tilin32',
}


function getUser(): User {
    return{
        uid:'ABC-123',
        username:'Tilin32',
    };
}


const getUser2 = () => ({
        uid:'ABC-123',
        username:'Tilin32',
    });


const user = getUser()
const user2 = getUser2()
console.log(user, user2)




const myNumbers: number[] =  [1,2,3,4,5]
//CallBacks
myNumbers.forEach(console.log);