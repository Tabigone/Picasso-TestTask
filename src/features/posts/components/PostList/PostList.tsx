import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { Loading, ErrorLoading } from "../../../../shared/components";
import { useGetPostsQuery, PostItem } from "../../model/postsApi";
import { Post } from "../Post/Post";
import "./PostList.css";

export const PostList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isError } = useGetPostsQuery(page);

  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    if (data) {
      setPosts([...posts, ...data]);
    }
  }, [data]);

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    if ((stopIndex + 1) / page === 20) {
      setPage(page + 1);
    }
  };

  const isItemLoaded = () => {
    return isLoading;
  };

  const Row = ({ index, style }: any) => {
    const post = posts[index];

    return (
      <div style={style}>
        <Post key={post.id} post={post} />
      </div>
    );
  };

  return (
    <>
      {isError ? (
        <ErrorLoading error={error} />
      ) : isLoading ? (
        <Loading />
      ) : !posts?.length ? (
        <h1>Нет новостей</h1>
      ) : (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={posts.length}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              height={window.innerHeight}
              width={window.innerWidth}
              itemSize={120}
              itemCount={posts.length}
              onItemsRendered={onItemsRendered}
              ref={ref}
              className="post-list"
            >
              {Row}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </>
  );
};
