import React, {useEffect, useState} from 'react';
import axios from "axios";

function CreatePost(props) {
    const [token, setToken] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState(0);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token) {
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/get_user_id/',
                headers: {
                    'Authorization': 'token ' + token
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setAuthor(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [token]);

    function titleHandler(event) {
        setTitle(event.target.value);
    }

    function bodyHandler(event) {
        setBody(event.target.value);
    }

    function addPost() {
        var data = JSON.stringify({
            "title": title,
            "body": body,
            "author":author,
        });

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/posts/',
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
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
            {token ?
                <div>
                    <p>Title <input onChange={titleHandler} type={'text'}/></p>
                    <p>Body <input onChange={bodyHandler} type={'text'}/></p>
                    <button onClick={addPost}>Add</button>
                </div> :
                null
            }
        </div>
    );
}

export default CreatePost;