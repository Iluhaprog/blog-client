import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../buttons';
import { Row } from '../containers';
import { UserShortInfo } from '../UserShortInfo';
import './mainNav.scss';

function MainNav(props) {
    const history = useHistory();
    const links = [
        {path: '/home', name: 'Home' },
        {path: '/search', name: 'Search'},
        {path: '/about', name: 'About'},
    ];
    return (
        <div className='main-nav'>
            <Row justifyContent='sb' alignItems='c'>
                <nav>
                    <ul className='row'>
                        {
                            links.map(link => (
                                <li key={link.path}>
                                    <NavLink to={link.path} activeClassName='selected'>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }    
                    </ul>                    
                </nav>
                {
                    props.isAuth 
                        ? (
                            <NavLink to='/profile'>
                                <UserShortInfo 
                                    row={true}  
                                    width={20}
                                    height={20}
                                />
                            </NavLink>
                        )
                        : (
                            <PrimaryButton 
                                text='Login'
                                onClick={() => {
                                    history.push('/login');
                                }}
                            />
                        )
                }
            </Row>
        </div>
    );
}

MainNav.defaultProps = {
    isAuth: false,
};

MainNav.propTypes = {
    isAuth: PropTypes.bool,
};

export default MainNav;