import { Box, Button, CardBody } from "@chakra-ui/react";
import { FC, useState } from "react";

import { useTranslation } from "react-i18next";

interface PostBodyProps {
  content: string;
}

export const PostBody: FC<PostBodyProps> = ({ content }) => {
  const { t } = useTranslation();
  const [fold, setFold] = useState(true);
  const foldPost = () => setFold(!fold);

  return (
    <CardBody>
      <Box maxH={fold ? "48" : "100%"} overflow="hidden">
        {content}
      </Box>
      <Button size="xs" borderRadius="full" mt="3" px="3" onClick={foldPost}>
        {fold ? t("post.unfold") : t("post.fold")}
      </Button>
    </CardBody>
  );
};
