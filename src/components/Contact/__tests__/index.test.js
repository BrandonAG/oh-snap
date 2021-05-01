import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

describe('Contact component', () => {
    // baseline test
    render(<ContactForm />);

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('h1 text is correct', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
})

describe('h1 text is correct', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('btn')).toHaveTextContent('Submit')
    })
})