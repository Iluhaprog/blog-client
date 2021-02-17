import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../../buttons';
import { Row } from '../../containers';
import { UserShortInfo } from '../../UserShortInfo';
import './mainNav.scss';

function MainNav(props) {
    const history = useHistory();
    const [menuIsVisible, setMenuVisible] = useState(false);
    const links = [
        {path: '/home', name: 'Home' },
        {path: '/search', name: 'Search'},
        {path: '/about', name: 'About'},
    ];
    return (
        <div className='main-nav'>
            <Row justifyContent='sb' alignItems='c'>
                <div 
                    className={`burger-button ${menuIsVisible ? 'burger-button_visible' : ''}`}
                    onClick={() => setMenuVisible(!menuIsVisible)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={menuIsVisible ? 'visible' : ''}>
                    <ul className='row'>
                        {
                            links.map(link => (
                                <li key={link.path}>
                                    <NavLink 
                                        to={link.path} 
                                        activeClassName='selected'
                                        onClick={() => setMenuVisible(!menuIsVisible)}
                                    >
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