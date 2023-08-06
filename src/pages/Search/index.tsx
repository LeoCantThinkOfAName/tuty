import { Box, Spinner } from "@chakra-ui/react";
import { FC, useEffect } from "react";

import { Post } from "../../components/Post";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { usePosts } from "../../services";

export const SearchPage: FC = () => {
  const { term } = useParams();
  const { data, fetchNextPage, isLoading, hasNextPage } = usePosts(term ?? "");
  const showLoader = hasNextPage === undefined || hasNextPage;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!isLoading && inView) fetchNextPage();
  }, [inView, isLoading]);

  return (
    <>
      {data?.pages.map((page) =>
        page?.data.map((pageData) => (
          <Post key={pageData.id} data={pageData} />
        )),
      )}
      {showLoader && (
        <Box ref={ref} display="flex" justifyContent="center">
          <Spinner thickness="4px" speed="0.65s" color="gray.500" size="xl" />
        </Box>
      )}
    </>
  );
};
