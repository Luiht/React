interface Person {
    fristName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address{
    postalCode: string;
    city: string;
}

const iroman: Person = {
    fristName: 'luan',
    lastName: 'de los santos',
    age: 20,
    address: {
        postalCode:  "ABC-123",
        city: 'Montevideo',
    },
};





console.log(iroman);

// const spiderman =  structuredClone(iroman );

//iroman.fristName = 'peter';
//iroman.lastName = 'parker';
//spiderman.address.city = 'Peru';

//console.log(iroman, spiderman); 