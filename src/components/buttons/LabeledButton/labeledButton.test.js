import React from 'react';
import { render } from '@testing-library/react';
import LabeledButton from './LabeledButton';

test('Test labeled button view', () => {
    const { asFragment } = render(<LabeledButton text='test'/>)
    expect(asFragment()).toMatchSnapshot();
});