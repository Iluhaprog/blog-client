import React from 'react';
import { NavLink } from 'react-router-dom';
import './footerNav.scss';

function FooterNav(props) {
    const links = [
        {path: '/home', name: 'Home' },
        {path: '/search', name: 'Search'},
        {path: '/about', name: 'About'},
    ];

    return (
        <nav className='footer-nav'>
            <ul>
                {
                    links.map(link => (
                        <li key={link.path + Date.now()}>
                            <NavLink 
                                to={link.path} 
                                activeClassName='selected'
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default FooterNav;