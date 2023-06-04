import { Card } from "@chakra-ui/react";
import { FC } from "react";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { usePosts } from "../../services/usePosts";

interface PostProps {
  data: NonNullable<ReturnType<typeof usePosts>["data"]>[number];
}

export const Post: FC<PostProps> = ({ data }) => {
  return (
    <Card role="article" mb="5" boxShadow="md">
      <PostHeader
        userName={data.author!.name}
        jobTitle={data.author!.title ?? ""}
        category={data.category!.name}
        date={new Date(data.createdAt)}
      />
      <PostBody content={data.content} />
      <PostFooter tags={data.tags ?? []} />
    </Card>
  );
};
