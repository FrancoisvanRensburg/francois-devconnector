import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';
import Alert from './components/layout/alert.component';
import Dashboard from './components/dashboard/dashboard.component';
import PrivateRoute from './components/routing/privateRoute';
import CreateProfile from './components/profile-form/create-profile.component';
import EditProfile from './components/profile-form/edit-profile.component';
import AddExperience from './components/profile-form/add-experience.component';
import AddEducation from './components/profile-form/add-education.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import Posts from './components/posts/posts.component';
import Post from './components/post/post.component';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/post/:postId' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
