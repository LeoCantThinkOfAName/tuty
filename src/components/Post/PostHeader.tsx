import {
  Avatar,
  CardHeader,
  Flex,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";

import { CATEGORY_TYPE } from "../../constants";
import { FC } from "react";
import { categoryColorMap } from "../../utils/categoryColorMap";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useLocale } from "../../hooks/useLocale";
import { useTranslation } from "react-i18next";

interface PostHeaderProps {
  userName: string;
  jobTitle: string;
  date: Date;
  category: string;
}

export const PostHeader: FC<PostHeaderProps> = ({
  userName,
  jobTitle,
  date,
  category,
}) => {
  const { localePkg } = useLocale();
  const { t } = useTranslation();

  return (
    <CardHeader display="flex" alignItems="center">
      <Flex alignItems="center" w="100%" justifyContent="space-between">
        <Flex alignItems="center" pr="5">
          <Avatar mr="3" title={userName} />
          <Flex flexDir="column">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              {userName}
            </Text>
            <Text as="span" color="gray.500" fontSize="sm">
              {jobTitle}
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="end" flexWrap="wrap-reverse" alignItems="center">
          <Text fontSize="sm" color="gray.500">
            {`${[formatDistanceToNow(date, { locale: localePkg })]} ${t(
              "post.before"
            )}`}
          </Text>
          <Tag
            borderRadius="full"
            variant="solid"
            colorScheme={categoryColorMap(category as CATEGORY_TYPE)}
            ml="2"
          >
            <TagLabel>{t(`post.categories.${category}`)}</TagLabel>
          </Tag>
        </Flex>
      </Flex>
    </CardHeader>
  );
};
