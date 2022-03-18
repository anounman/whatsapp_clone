import "./App.css";
import React, { useEffect, useState } from "react"; 
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { Redirect} from 'react-router';

function App() {
    // const [{ user } , dispatch] = useStateValue();
    const [user , setUser] = useState();
    useEffect(() => {
      let data = localStorage.getItem('data');
      setUser(JSON.parse(data));
    }, [])
  return (
    
  <div className="app">
    {!user ? (
        <Login />    
    ) 
    :
     (  
          <div className="app_body">
          <Router >
            {!isMobile ? (
              <Sidebar />
            ) : (
              <div></div>
            )}
            <Switch>
              <Route path="/rooms/:roomId">
                  <Chat />
              </Route>
              <Route path="/">
                  {isMobile ? (
                    <Sidebar />
                  ):(<div></div>)}
              </Route>
            </Switch>
          </Router>
      </div>
  
    )}
  </div>
  );
}

export default App;
