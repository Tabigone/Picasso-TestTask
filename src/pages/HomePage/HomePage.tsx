import { PostList } from "../../features/posts";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Наши публикации</h1>
      <PostList />
    </div>
  );
};
