import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import DropZone from './DropZone';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const decor = el => {
    const form = () => (<form>{el}</form>);
    return reduxForm({
        form: 'test',
    })(form);
}

describe('Test for drop zone view', () => {
    test('Should view unfocused drop zone', () => {
        const store = mockStore({});
        const Dz = decor(<DropZone name='avatar'/>);
        const { asFragment } = render(<Provider store={store}><Dz /></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should view focused drop zone', () => {
        const store = mockStore({});
        const Dz = decor(<DropZone name='avatar'/>);
        const { asFragment, container } = render(<Provider store={store}><Dz /></Provider>);
        const dz = container.querySelector('.drop-zone');
        fireEvent.dragOver(dz);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should view drop zone with img', () => {
        const store = mockStore({});
        const Dz = decor(<DropZone name='avatar'/>);
        const { asFragment, container } = render(<Provider store={store}><Dz /></Provider>);
        const dz = container.querySelector('.drop-zone');
        fireEvent.drop(dz, {
            dataTransfer: {
                files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
            },
        });
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        }).then(() => {
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
