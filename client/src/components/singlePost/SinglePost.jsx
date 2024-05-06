import "./singlePost.css"
import { useLocation } from "react-router";

import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    console.log(path)

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
            console.log(res)
        };
        getPost();
      }, [path]);
    
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                {/* <img
                    className="postImage"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                /> */}
                <div className="singlePostInformation">
                    <span className="singlePostAuthor">Author: {post.author}</span>
                    <span className="singlePostDate">Date: {new Date(post.updatedAt).toDateString()}</span>
                </div>
                <p>
                    {post.description}    
                </p>
            </div>
        </div>
    )
}