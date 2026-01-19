import {describe, expect, test} from 'vitest';
import { add, multiply, substract } from './math.helper';
    describe('add' , () => {
        test('muestra 2 poisibles numeros', () =>{
        //Arrange 
        const a = 1;
        const b = 2;
        // Act 
            const result = add(a,b);
        // Assert
        expect(result).toBe(a+b);//Da error si no es 3
        });
    });
    describe('substract', () => {
        test('muestra 2 poisibles numeros', () =>{
            const a = 1;
            const b = 2;
            const result = substract(a,b);
            expect(result).toBe(a-b);//Da error si no es 2
    });
});
    describe('multiply', () => {
        test('muestra 2 poisibles numeros', () =>{
            const a = 1;
            const b = 2;
            const result = multiply(a,b);
            expect(result).toBe(a*b);//Da error si no es 2
    });
});

