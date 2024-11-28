import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'
/**
 * 1. initial state of the count, it should be 0.
 * 2. increment.
 *      - on increment button click, new count shud be +1.
 * 3. decrement
 *      - on decrement btn click, new count shud be -1.
 */

test('initial state check', () => {
    // rendering in VDOM
    render(<Counter />);

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

})

test('decr by 1', () => {

})
