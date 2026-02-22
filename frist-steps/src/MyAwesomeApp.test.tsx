import { describe, expect, test} from 'vitest';
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from './MyAwesomeApp';



describe('MyAwesomeApp', () => {
test('should render',() => {
	const { container } = render(<MyAwesomeApp/>);
	screen.debug();

	const h1 = container.querySelector('h1');
	const h3 = container.querySelector('h3');

	expect(h1?.innerHTML).toContain('Fernando');
	expect(h3?.innerHTML).toContain('Herrera');
	});

	// test('should render -screen',() => {
	// screen.debug();

	// const h1 = screen.getByRole('heading', {
	// 	level:1
	// });
	// console.log(h1.innerHTML)
	// });

	test('should match snapshot', ()=>{
		const {container} = render(<MyAwesomeApp/>);
		expect(container).toMatchSnapshot();
	})

	test('should match snapshot', ()=>{
		render(<MyAwesomeApp/>);
		expect(screen.getByTestId('div-app')).toMatchSnapshot();
	})



});