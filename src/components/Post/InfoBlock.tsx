import { Box, Text } from "@chakra-ui/react";

import { FC } from "react";
import { Post as PostType } from "../../services/usePosts";
import { useTranslation } from "react-i18next";

interface InfoProps {
  title: string;
  content: string;
}

interface InfoBlockProps extends Partial<PostType> {}

const Info: FC<InfoProps> = ({ title, content }) => (
  <Box display="flex items-center">
    <Text fontWeight="bold" textTransform="uppercase" mr="2" children={title} />
    <Text children={content} />
  </Box>
);

export const InfoBlock: FC<InfoBlockProps> = ({
  location,
  objective,
  rate,
  rateType,
  subject,
}) => {
  const { t } = useTranslation();

  return (
    <Box mb="2">
      {objective && (
        <Info title={t("post.infoBlock.objective")} content={objective} />
      )}
      {subject && (
        <Info title={t("post.infoBlock.subject")} content={subject} />
      )}
      {location && (
        <Info title={t("post.infoBlock.location")} content={location} />
      )}
      {rate && rateType && (
        <Box display="flex items-center">
          <Info
            title={t("post.infoBlock.rate")}
            content={t(`post.infoBlock.${rateType}`, { rate })}
          />
        </Box>
      )}
    </Box>
  );
};
