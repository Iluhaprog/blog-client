import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Modal from './Modal';

const getProps = (props = {}) => ({
    modal: {
        text: props.text || '',
        withInput: props.withInput || false,
        handleSuccess: props.handleSuccess || (() => {}),
        visible: props.visible || false,
        fail: props.fail || { message: '' },
    },
    close: props.close || (() => {}),
    setFail: () => {},
});

describe('Test modal view', () => {
    test('Should return unvisible modal', () => {
        const props = getProps();
        const { asFragment } = render(<Modal {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('Should return visible modal', () => {
        const props = getProps({ visible: true });
        const { asFragment } = render(<Modal {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('Should return modal with input', () => {
        const props = getProps({ withInput: true });
        const { asFragment } = render(<Modal {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('Should return modal with fail', () => {
        const props = getProps({ fail: { message: 'test fail' } });
        const { asFragment } = render(<Modal {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test modal handlers', () => {
    test('Should call handleSuccess function', async () => {
        const handleSuccess = jest.fn();
        const props = getProps({ handleSuccess });
        const { container } = render(<Modal {...props} />);
        fireEvent.click(container.querySelector('.success-button'));
        await waitFor(() => {
            expect(handleSuccess).toHaveBeenCalledTimes(1);
        });
    });
    test('Should call close function', async () => {
        const close = jest.fn();
        const props = getProps({ close });
        const { container } = render(<Modal {...props} />);
        fireEvent.click(container.querySelector('.danger-button'));
        await waitFor(() => {
            expect(close).toHaveBeenCalledTimes(1);
        });
    });
});