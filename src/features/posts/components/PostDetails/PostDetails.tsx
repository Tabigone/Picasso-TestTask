import { Link } from "react-router-dom";
import { Loading, ErrorLoading } from "../../../../shared/components";
import { useGetPostQuery} from "../../model/postsApi";
import "./PostDetails.css";

interface PostDetailsProps {
  id: number;
}

export const PostDetails = ({ id }: PostDetailsProps) => {
  const { data, isLoading, isError, error } = useGetPostQuery(Number(id));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorLoading error={error} />
      ) : (
        data?.length && (
          <div className="post-details">
            <h1 className="post-details-title">{data[0].title}</h1>
            <p className="post-details-body">{data[0].body}</p>
            <Link to="/" className="post-back-button">
              Назад
            </Link>
          </div>
        )
      )}
    </>
  );
};
