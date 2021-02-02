import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminNav from '../../components/AdminNav';
import Profile from './Profile';
import Posts from './Posts';
import Settings from './Settings';
import Projects from './Projects';
import Post from './Post';

import './styles.scss';

function Admin({ isAuth }) {
    if (!isAuth) return <Redirect to='/login' />
    
    return (
        <div className='admin'>
            <div className="admin__box admin__box_left">
                <AdminNav />
            </div>
            <main className="admin__box">
            <Switch>
                <Route exact path='/admin/profile' component={Profile} />
                <Route path='/admin/posts/:pageNumber' component={Posts} />
                <Route path='/admin/projects' component={Projects} />
                <Route path='/admin/settings' component={Settings} />
                <Route path='/admin/post/:id' component={Post} />
            </Switch>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuth: state.user.authorized,
});

export default connect(mapStateToProps)(Admin);