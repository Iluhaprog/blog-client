import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import { Modal } from './components/modals/Modal';
import { Message } from './components/Message';
import './App.scss';

const Admin = React.lazy(() => import('./pages/admin'));
const Main = React.lazy(() => import('./pages/main'));

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <Route path='/' component={Main} />
            <Route component={NotFound} />
          </Switch>
          <Modal />
          <Message />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
