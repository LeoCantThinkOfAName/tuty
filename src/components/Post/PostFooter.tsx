import {
  BsFillBookmarkPlusFill,
  BsFillChatSquareDotsFill,
  BsFillHeartFill,
  BsFillSendFill,
} from "react-icons/bs";
import { CardFooter, Flex, Tag, TagLabel } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";

import { ActionButton } from "./ActionButton";
import { CommentSection } from "./CommentSection";
import { useTranslation } from "react-i18next";

interface PostFooterProps {
  tags?: string[];
}

export const PostFooter: FC<PostFooterProps> = ({ tags }) => {
  const { t } = useTranslation();
  const [showCommentSection, setShowCommentSection] = useState(false);

  const toggleCommentSection = useCallback(
    () => setShowCommentSection((prev) => !prev),
    [],
  );

  return (
    <CardFooter flexDir="column">
      <Flex>
        {tags?.map((tag) => (
          <Tag
            borderRadius="full"
            variant="outline"
            mr="2"
            cursor="default"
            title={tag}
            key={tag}
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Flex>
      <Flex mt="3" flexWrap="wrap">
        <ActionButton title={t("post.actions.like")} icon={BsFillHeartFill} />
        <ActionButton
          title={t("post.actions.bookmark")}
          icon={BsFillBookmarkPlusFill}
        />
        <ActionButton title={t("post.actions.share")} icon={BsFillSendFill} />
        <ActionButton
          title={t("post.actions.comment")}
          icon={BsFillChatSquareDotsFill}
          onClick={toggleCommentSection}
        />
      </Flex>
      {showCommentSection && (
        <CommentSection onSubmit={() => {}} onCancel={toggleCommentSection} />
      )}
    </CardFooter>
  );
};

PostFooter.defaultProps = {
  tags: ["Tag 1", "Tag 2"],
};
