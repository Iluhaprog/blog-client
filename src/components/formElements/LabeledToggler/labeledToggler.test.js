import React from 'react';
import { render } from '@testing-library/react';
import LabeledToggler from './LabeledToggler';

describe('Test view of labeled toggler', () => {
    test('Should return view with true value', () => {
        const { asFragment } = render(
            <LabeledToggler 
                value={true}
                handleChange={() =>{}}
                label='Visible: '
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should return view with false value', () => {
        const { asFragment } = render(
            <LabeledToggler 
                value={false}
                handleChange={() =>{}}
                label='Visible: '
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
