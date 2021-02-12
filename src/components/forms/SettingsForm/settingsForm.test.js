import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SettingsForm from './SettingsForm';

const mockStore = configureMockStore();
const decor = el => {
    const form = () => (el);
    return reduxForm({
        form: 'test',
    })(form);
}

describe('Test view of settings form', () => {
    test('Should return view of settings form', () => {
        const store = mockStore();
        const Pf = decor(<SettingsForm onSubmit={() => {}}/>)
        const { asFragment } = render(
            <Provider store={store}>
                <Pf />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test events of project form', () => {
    test('Should handle submit for project form', async () => {
        const store = mockStore();
        const handleSubmit = jest.fn();
        const Pf = decor(<SettingsForm handleSubmit={handleSubmit}/>)
        const { container } = render(
            <Provider store={store}>
                <Pf />
            </Provider>
        );
        fireEvent.submit(container.querySelector('form'));
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1);
        });
    });
});