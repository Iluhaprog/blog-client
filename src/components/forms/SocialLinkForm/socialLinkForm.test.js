import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SocialLinkForm from './SocialLinkForm';

const mockStore = configureMockStore();
const decor = el => {
    const form = () => (el);
    return reduxForm({
        form: 'test',
    })(form);
}

test('Render width preview', () => {
    const store = mockStore();
    const Slf = decor(<SocialLinkForm onSubmit={() => {}}/>);
    const { asFragment } = render(
        <Provider store={store}>
            <Slf />
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('Render without preview', () => {
    const store = mockStore();
    const Slf = decor(<SocialLinkForm preview='preview' onSubmit={() => {}}/>);
    const { asFragment } = render(
        <Provider store={store}>
            <Slf />
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('Should handle submit', async () => {
    const store = mockStore();
    const handleSubmit = jest.fn();
    const Slf = decor(<SocialLinkForm preview='preview' handleSubmit={handleSubmit}/>);
    const { container } = render(
        <Provider store={store}>
            <Slf />
        </Provider>
    );
    fireEvent.submit(container.querySelector('form'));
    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
})