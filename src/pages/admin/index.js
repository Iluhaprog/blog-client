import AdminNav from '../../components/AdminNav';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Posts from './Posts';
import Settings from './Settings';
import Projects from './Projects';

import './styles.scss';

function Admin(props) {
    return (
        <div className='admin'>
            <div className="admin__box admin__box_left">
                <AdminNav />
            </div>
            <main className="admin__box">
            <Switch>
                <Route exact path='/admin/profile' component={Profile} />
                <Route path='/admin/posts' component={Posts} />
                <Route path='/admin/projects' component={Projects} />
                <Route path='/admin/settings' component={Settings} />
            </Switch>
            </main>
        </div>
    );
}

export default Admin;