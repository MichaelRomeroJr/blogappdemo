import Post from "../post/Post"
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p)=> (
        // console.log(p.title)
        <Post title={p.title} description={p.description} date={p.updatedAt} postId={p._id}/>
      ))}
    </div>
  );
}