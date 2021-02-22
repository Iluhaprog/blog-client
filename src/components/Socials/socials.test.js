import React from 'react';
import { render } from '@testing-library/react';
import Socials from './Socials';

test('Should render socials component', () => {
    const { asFragment } = render(<Socials />);
    expect(asFragment()).toMatchSnapshot();
});


test('Should render socials component with links', () => {
    const { asFragment } = render(
        <Socials 
            links={[
                {title: 'title', preview: 'preview', link: 'test'},
                {title: 'test', link: 'link'},
            ]}/>
    );
    expect(asFragment()).toMatchSnapshot();
});