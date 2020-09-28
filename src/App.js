import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <Header />
      <div className='app-wrapper'>
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'  render={()=><DialogsContainer store = {props.store}/>} />
          <Route path='/profile' render={()=><Profile store = {props.store}/>} />
          <Route path='/news' component={News}/>
          <Route path='/musik' component={Musik}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
