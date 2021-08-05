import About from "../About";
import {render} from '@testing-library/react'

test('Should have Xplory in it', () => {
    const { getByText } = render(<About />)

    expect(getByText('Xplory')).toBeInTheDocument()
})

test('', () => {
    const {} = render()

    expect(('')).toBeInTheDocument()
})

test('', () => {
    const {} = render()

    expect(('')).toBeInTheDocument()
})

test('', () => {
    const {} = render()

    expect(('')).toBeInTheDocument()
})