import { Card } from "@chakra-ui/react";
import { FC } from "react";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { Post as PostType } from "../../services/usePosts";

interface PostProps {
  data: PostType;
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
      <PostBody post={data} />
      <PostFooter tags={data.tags ?? []} />
    </Card>
  );
};
