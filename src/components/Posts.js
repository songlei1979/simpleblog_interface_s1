import React, {useEffect, useState} from 'react';
import axios from "axios";
import {map} from "react-bootstrap/ElementChildren";

function Posts(props) {
    const [token, setToken] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token) {
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/posts/',
                headers: {
                    'Authorization': 'token '+token
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setLoading(false);
                    setPosts(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [token]);

    return (
        <div>
            {
                loading?<p>Loading</p>
                    :
                    <div>
                        {posts.map(post=>
                    <p key={post.id}>{post.title}</p>
                )}
                    </div>
            }
        </div>
    );
}

export default Posts;