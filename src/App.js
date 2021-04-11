import React, { Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store"
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'));
class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <HeaderContainer />
        <div className='app-wrapper'>
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => {
              return <Suspense fallback={<div>Загрузка...</div>}>
                <DialogsContainer />
              </Suspense>
            }} />
            <Route path='/profile/:userId?' render={() => {
              return <Suspense fallback={<div>Загрузка...</div>}>
                <ProfileContainer />
              </Suspense>
            }} />
            <Route path='/news' component={News} />
            <Route path='/musik' component={Musik} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = () => {
  return <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>
}

export default SamuraiJSApp;