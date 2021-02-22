import React from 'react';
import { Socials } from '../Socials';
import { FooterNav } from '../navs/FooterNav';
import './footer.scss';

function Footer(props) {

    return (
        <footer className='footer'>
            <Socials />
            <FooterNav />
        </footer>
    );
}

export default Footer;