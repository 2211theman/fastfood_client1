/*importo il Logincomponente, aggiungo un'istruzione condizionale da visualizzare 'Login' se token è falsa.
Passo la setToken function al Login component:*/

import React, { useState } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;


