import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'
/**
 * 1. initial state of the count, it should be 0.
 * 2. increment.
 *      - on increment button click, new count shud be +1.
 * 3. decrement
 *      - on decrement btn click, new count shud be -1.
 */

describe('Counter component testcases', () => {
    test('initial state check', () => {
        // rendering in VDOM
        render(<Counter></Counter>);

        // selection..
        const countText = screen.getByText('Count is 0');
        const decrBtn = screen.getByText('Decrement');
        const incrBtn = screen.getByText('Increment');

        // we are verifying...
        expect(countText).toBeInTheDocument()
        expect(decrBtn).toBeInTheDocument()
        expect(incrBtn).toBeInTheDocument()
    })
    test('incr by 1', () => {
        render(<Counter></Counter>);
        const incrBtn = screen.getByText('Increment');
        fireEvent.click(incrBtn);
        const countTextOne = screen.getByText('Count is 1');
        expect(countTextOne).toBeInTheDocument()
    })
    test('decr by 2', () => {
        render(<Counter></Counter>);
        const decrBtn = screen.getByText('Decrement');
        fireEvent.click(decrBtn);
        fireEvent.click(decrBtn);
        const countTextMinusTwo = screen.getByText('Count is -2');
        expect(countTextMinusTwo).toBeInTheDocument()
    })

    // snapshot...
    test('snapshot for counter', () => {
        const { asFragment } = render(<Counter />)
        expect(asFragment()).toMatchSnapshot()

    })
})