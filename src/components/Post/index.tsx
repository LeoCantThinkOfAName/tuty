import { Card } from "@chakra-ui/react";
import { FC } from "react";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

interface PostProps {}

export const Post: FC<PostProps> = () => {
  return (
    <Card role="article">
      <PostHeader userName="" jobTitle="" category="" date={new Date()} />
      <PostBody content="" />
      <PostFooter />
    </Card>
  );
};
