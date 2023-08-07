import { BaseUnit, MaximumArticleHeight } from "../../constants";
import { Box, Button, CardBody } from "@chakra-ui/react";
import { FC, useLayoutEffect, useRef, useState } from "react";

import { InfoBlock } from "./InfoBlock";
import { Post as PostType } from "../../services/usePosts";
import { useTranslation } from "react-i18next";

interface PostBodyProps {
  post: PostType;
  forceHide?: boolean;
}

export const PostBody: FC<PostBodyProps> = ({ post, forceHide }) => {
  const { t } = useTranslation();
  const articleRef = useRef<HTMLDivElement | null>(null);
  const [fold, setFold] = useState(false);
  const [foldable, setFoldable] = useState(false);
  const foldPost = () => setFold(!fold);
  const { content, objective, subject, location, rate, rateType, currency } =
    post;

  useLayoutEffect(() => {
    const article = articleRef.current;
    const articleHeight = article?.offsetHeight;
    if ((articleHeight ?? 0) > MaximumArticleHeight * BaseUnit || forceHide) {
      setFoldable(true);
      setFold(true);
    }
  }, []);

  return (
    <CardBody>
      <InfoBlock
        subject={subject}
        objective={objective}
        location={location}
        rate={rate}
        rateType={rateType}
        currency={currency}
      />
      <Box
        ref={articleRef}
        maxH={fold ? MaximumArticleHeight : "100%"}
        overflow="hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {foldable && (
        <Button size="xs" borderRadius="full" mt="3" px="3" onClick={foldPost}>
          {fold ? t("post.unfold") : t("post.fold")}
        </Button>
      )}
    </CardBody>
  );
};
