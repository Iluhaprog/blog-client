import React from 'react';
import { reduxForm } from 'redux-form';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ImageLoaderForm from './ImageLoaderForm';

const mockStore = configureMockStore();
const decor = el => {
    const form = () => (el);
    return reduxForm({
        form: 'test',
    })(form);
}

describe('Test view image location form', () => {
    test('Should view form', () => {
        const store = mockStore();
        const ILF = decor(<ImageLoaderForm onSubmit={() => {}}/>);
        const { asFragment } = render(
            <Provider store={store}>
                <ILF />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Test events image location form', () => {
    test('Should handle submit event', async () => {
        const store = mockStore();
        const handleSubmit = jest.fn();
        const ILF = decor(<ImageLoaderForm handleSubmit={handleSubmit}/>);
        const { container } = render(
            <Provider store={store}>
                <ILF />
            </Provider>
        );
        fireEvent.submit(container.getElementsByTagName('form')[0]);
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1);
        });
    })
});