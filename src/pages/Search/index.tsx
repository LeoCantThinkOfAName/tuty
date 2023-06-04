import { FC } from "react";
import { Post } from "../../components/Post";
import { useParams } from "react-router-dom";
import { usePosts } from "../../services";

export const SearchPage: FC = () => {
  const { term } = useParams();
  const { data } = usePosts();

  if (!data) return null;
  return (
    <>
      {data.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
};
