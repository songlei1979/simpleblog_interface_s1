import React, {useState} from 'react';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameHandler(event) {
        setUsername(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function login() {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('username', username);
        data.append('password', password);

        var config = {
            method: 'post',
            url: '127.0.0.1:8000/auth/',
            headers: {

            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Username: <input onChange={usernameHandler} type={'text'} placeholder={'username'}/></p>
            <p>Password: <input onChange={passwordHandler} type={'password'}/></p>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;