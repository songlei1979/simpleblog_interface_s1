import React, {useEffect, useState} from 'react';
import axios from "axios";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token){
            alert("you have logged in")
        }
    }, [token]);



    function usernameHandler(event) {
        setUsername(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function login() {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('username', username);
        data.append('password', password);

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/auth/',
            headers: {},
            data: data
        };


        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data.token));
                localStorage.setItem("token", response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    function logout(){
        localStorage.removeItem("token");
    }

    return (
        <div>

            {
                token?
                <button onClick={logout}>Logout</button>
                :
                    <div>
            <p>Username: <input onChange={usernameHandler} type={'text'} placeholder={'username'}/></p>
            <p>Password: <input onChange={passwordHandler} type={'password'}/></p>
            <button onClick={login}>Login</button>
                    </div>
            }
        </div>
    );
}

export default Login;