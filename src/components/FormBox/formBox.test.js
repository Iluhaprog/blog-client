import React from 'react';
import { render, unmountComponentArNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import FormBox from './FormBox';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    setTimeout(() => {
        unmountComponentArNode(container);
        container.remove();
        container = null;
    }, 1000);
});

test('Test form box', () => {
    act(() => {
        render(<FormBox>FormBox</FormBox>, container);
    });
    const formBox = container.querySelector('.form-box');
    expect(formBox.textContent).toBe('FormBox');
});