import { BaseUnit, MaximumArticleHeight } from "../../constants";
import { Box, Button, CardBody } from "@chakra-ui/react";
import { FC, useLayoutEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";

interface PostBodyProps {
  content: string;
  forceHide?: boolean;
}

export const PostBody: FC<PostBodyProps> = ({ content, forceHide }) => {
  const { t } = useTranslation();
  const articleRef = useRef<HTMLDivElement | null>(null);
  const [fold, setFold] = useState(false);
  const [foldable, setFoldable] = useState(false);
  const foldPost = () => setFold(!fold);

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
