import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Footer from './Footer';

const mockStore = configureMockStore([thunk]);

test('Should render footer comonent', () => {
    const store = mockStore({ 
        socialLink: {
            footerLinks: [],
        }
    });
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});