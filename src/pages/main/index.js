import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainNav } from '../../components/navs/MainNav';
import { Footer } from '../../components/Footer';
import Home from './Home';
import Search from './Search';
import About from './About';
import Post from './Post';
import './styles.scss';

function Main(props) {
    return (
        <div className='main'>
            <header className='main__box main__box_stiky'>
                <MainNav isAuth={props.isAuth}/>
            </header>
            <main className='main__box'>
                <Switch>
                    <Route exact path={['/', '/home']} component={Home}/>
                    <Route path={['/search', '/search/:q']} component={Search}/>
                    <Route path='/post/:id' component={Post} />
                    <Route path='/about' component={About} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

const mapStateToProps = state => ({
    isAuth: state.user.authorized,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);