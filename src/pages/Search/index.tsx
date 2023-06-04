import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { Post } from "../../components/Post";
import { useParams } from "react-router-dom";
import { usePosts } from "../../services";

export const SearchPage: FC = () => {
  const { term } = useParams();
  const { data, fetchNextPage } = usePosts(term ?? "");

  if (!data) return null;
  return (
    <>
      {data.pages.map((page) =>
        page?.data.map((pageData) => (
          <Post key={pageData.id} data={pageData} />
        )),
      )}
      <Button onClick={() => fetchNextPage()}>click</Button>
    </>
  );
};
