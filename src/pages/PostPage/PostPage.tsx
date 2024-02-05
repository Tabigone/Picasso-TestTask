import React from "react";
import { useParams } from "react-router-dom";
import { PostDetails } from "../../features/posts";
import "./PostPage.css";

type PostPageParams = {
  id: string;
};

export const PostPage = () => {
  const { id } = useParams<PostPageParams>();

  return (
    <div className="post-page">
      <PostDetails id={Number(id)} />
    </div>
  );
};
