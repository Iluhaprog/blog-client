import React from 'react';
import { NavLink } from 'react-router-dom';

import profile from './../../assets/icons/profile.svg';
import posts from './../../assets/icons/posts.svg';
import settings from './../../assets/icons/settings.svg';

import './nav.scss';
import { UserShortInfo } from '../UserShortInfo';

export default props => (
    <nav className='nav'>
        <div className='column column_jc-c'>
            <UserShortInfo />
            <NavLink to='/admin/profile' activeClassName='selected'>
                <img src={profile} alt='profile'/>
                <span>Profile</span>
            </NavLink>
            <NavLink to='/admin/posts/1' activeClassName='selected'>
                <img src={posts} alt='posts'/>
                <span>Posts</span>
            </NavLink>
            <NavLink to='/admin/projects' activeClassName='selected'>
                <img src={posts} alt='projects'/>
                <span>Projects</span>
            </NavLink>
            <NavLink to='/admin/settings' activeClassName='selected'>
                <img src={settings} alt='settings'/>
                <span>Settings</span>
            </NavLink>
        </div>
    </nav>
);