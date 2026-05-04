import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

    test('should initialize with default value of 10', () =>{
        const { result } = renderHook(()=> useCounter() );
        expect(result.current.counter).toBe(10);
        
    });

        test('should initialize with default value 20', () =>{
        const { result } = renderHook(()=> useCounter(29));
        expect(result.current.counter).toBe(20);
        
    });
});