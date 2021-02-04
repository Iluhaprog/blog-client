import React from 'react';
import configureMockStore from 'redux-mock-store';
import { reduxForm } from "redux-form";
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MarkdownRedactor from './MarkdownRedactor';


const mockStore = configureMockStore();
const decor = el => {
    const form = () => (<div>{el}</div>);
    return reduxForm({
        form: 'test',
    })(form);
}

test('Test view of markdown redactor', () => {
    const store = mockStore();
    const Mr = decor(
        <MarkdownRedactor 
            name='text'
            placeholder='Text'
            value={''}
        />
    );
    const { asFragment } = render(
        <Provider store={store}>
            <Mr />
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('Test view of markdown redactor full screen', async () => {
    const store = mockStore();
    const Mr = decor(
        <MarkdownRedactor 
            name='text'
            placeholder='Text'
            value={''}
        />
    );
    const { asFragment, container } = render(
        <Provider store={store}>
            <Mr />
        </Provider>
    );
    fireEvent.click(container.querySelector('.success-button'));
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    })
});