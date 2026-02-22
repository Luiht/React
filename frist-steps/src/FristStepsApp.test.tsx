import { render, screen } from "@testing-library/react";
import { describe,expect,test, vi } from "vitest";
import { FristStepsApp } from "./FristStepsApp";

vi.mock('./shopping-cart/ItemCounter', ()=>({
    ItemCounter: () => <div data-testid="ItemCounter" />,
}));


describe ('FristStepsApp', ()=>{
    test('should match snapshot', () =>{
        const { container } = render(<FristStepsApp/> )

        expect(container).toMatchSnapshot();
    })

    test('should render the correct number of itemCounter components',() =>{
        render(<FristStepsApp/>);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(1);
    })
})