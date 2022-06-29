import React from 'react';
import './Login.css';
const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": 'text/plain'};
/*Creo un modulo di base con un invio <button> e un <input> per il nome utente e la password.*/
/* <h1>tag che chiede all'utente di accedere. Aggiungendo login.css per lo stile*/

function Login(){
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" id="user"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" id="pwd"/>
                </label>
                <div>
                    <button type="submit" onClick={sendLogin}>Submit</button>
                </div>
            </form>
        </div>
    )
}
const sendLogin = async()=>{
    const user = document.getElementById("user").value;
    const pwd = document.getElementById("pwd").value;
    try {
        const response = await fetch(BASE_URL + 'auth', {
            method: 'POST',
            headers:{HEADERS},
            body: JSON.stringify({user,pwd})
        }); if (!response.ok){
           if( response.status === 401) {
               throw new Error(`${response.status} ${response.statusText}`);
           }
        }
        console.log(response.json());

        }catch(err) {
        console.log(err);
    }
}

export default Login;