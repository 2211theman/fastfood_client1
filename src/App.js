/*importo il Logincomponente, aggiungo un'istruzione condizionale da visualizzare 'Login' se token è falsa.
Passo la setToken function al Login component:*/

import React from 'react';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Login from './components/Login/Login';
import User from "./components/User/User";
import Chef from "./components/Chef/Chef";
import Admin from "./components/Admin/Admin";


function App() {

    return (
        <div className="wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/chef" element={<Chef />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;


