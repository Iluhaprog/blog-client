import React from 'react';
import { render, unmountComponentArNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

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

test('Test nav render', () => {
    act(() => {
        render(<BrowserRouter><Nav /></BrowserRouter>, container);
    });
    const expectText = ['Profile', 'Posts', 'Projects', 'Settings'];
    const links = container.querySelectorAll('a');
    const isEqual = true;
    for (const link of links) {
        if (!expectText.includes(link.textContent)) {
            isEqual = false;
            break;
        }
    }
    expect(isEqual).toBe(true);
});