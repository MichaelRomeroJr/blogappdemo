import { Link } from "react-router-dom"
import "../post/post.css"

export default function Post({title, description, date, postId}) {
    return (
        <div className="post">
            {/* <Link className="link" to="/post/postId" >
            <span className="postTitle">
                {title}
            </span> */}
            <Link className="link" to={`/post/${postId}`} >
            <span className="postTitle">
                {title}
            </span>
            {/* <img
            className="postImage"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            /> */}

            <hr/>
            <span className="postDate">
                {/* Today */}
                {new Date(date).toDateString()}
            </span>
            <p className="postDescription">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus */}
                {description}
            </p>

            </Link>
        </div>
    )
}