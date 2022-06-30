import React from 'react';
import '../base.css';
/*importo le route di user admin e chef*/
const BASE_URL = 'http://localhost:3500/',
    HEADERS = {"Content-Type": 'text/plain'};

/*Creo un modulo di base con un invio <button> e un <input> per il nome utente e la password.*/
/* <h1>tag che chiede all'utente di accedere. Aggiungendo login.css per lo stile*/

function Login(){
    return(
        <div className="wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={sendLogin}>
                <label>
                    <p>Username</p>
                    <input type="text" id="user"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" id="pwd"/>
                </label>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <div>
                <nav>
                    <ul>
                        <li><a href={"/user"}>user</a></li>
                        <li><a href={"/chef"}>chef</a></li>
                        <li><a href={"/admin"}>admin</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
/* we tried a lot of things but we couldn't find a solution to preflight request */
/* to avoid login and preflight problems we added the nav */

const sendLogin = async()=>{
    const user = document.getElementById("user").value;
    const pwd = document.getElementById("pwd").value;
    try {
        const response = await fetch(BASE_URL + 'auth', {
            method: 'POST',
            headers:{HEADERS},
            body: JSON.stringify({user,pwd})
        })
            .then(res=>res.json());
        if (!response.ok){
           if( response.status === 401) {
               throw new Error(`${response.status} ${response.statusText}`);
           }
        }
    }catch(err) {
        console.log(err);
    }
}

export default Login;