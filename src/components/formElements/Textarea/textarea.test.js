import React from 'react';
import { render } from '@testing-library/react';
import { reduxForm } from "redux-form";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Textarea from './Textarea';

const mockStore = configureMockStore();


const decor = el => {
    const form = () => (<form>{el}</form>);
    return reduxForm({
        form: 'test',
    })(form);
}


test('Test view of textaria', () => {
    const store = mockStore({});
    const Ta = decor(
        <Textarea name='test_name' />
    );
    const { asFragment } = render(<Provider store={store}><Ta /></Provider>);
    expect(asFragment()).toMatchSnapshot();
});