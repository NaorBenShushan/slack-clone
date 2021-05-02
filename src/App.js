import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Auth/Login/Login';
import { useStateValue } from './components/Templates/StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="first_chat_container">
                    <h1>Welcome</h1>
                    <h3>
                      To start, choose one of the channels on the sidebar's
                      bottom
                    </h3>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
