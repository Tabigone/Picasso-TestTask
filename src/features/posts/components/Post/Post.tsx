import { Link } from "react-router-dom";
import { PostItem } from "../../model/postsApi";
import "./Post.css";

export const Post = ({ post }: { post: PostItem }) => {
  return (
    <div className="post" key={post.id}>
      <div className="post-content">
        <p className="post-id">{post.id}.</p>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </div>
      <Link to={`/posts/${post.id}`} className="post-details-button">
        Подробнее
      </Link>
    </div>
  );
};
