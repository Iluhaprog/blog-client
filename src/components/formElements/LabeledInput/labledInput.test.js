import React from 'react';
import { render } from '@testing-library/react';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import LabeledInput from './LabeledInput';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();


const decor = el => {
    const form = () => (<form>{el}</form>);
    return reduxForm({
        form: 'test',
    })(form);
}

test('Test labled input view', () => {
    const store  = mockStore({});
    const Lbin = decor(
        <LabeledInput 
            type='text'
            name='test'
            component='input'
            label='TEST'
        />
    );
    const { asFragment } = render(<Provider store={store}><Lbin /></Provider>);
    expect(asFragment()).toMatchSnapshot();
});