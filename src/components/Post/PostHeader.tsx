import {
  Avatar,
  CardHeader,
  Flex,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";

import { FC } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useTranslation } from "react-i18next";
import { zhTW } from "date-fns/locale";

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
  const {
    i18n: { language },
  } = useTranslation();
  const locale = language === "zh" ? zhTW : undefined;

  return (
    <CardHeader display="flex" alignItems="center">
      <Flex alignItems="center" w="100%" justifyContent="space-between">
        <Flex alignItems="center" pr="5">
          <Avatar mr="3" title="username" />
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
            {formatDistanceToNow(date, { locale })}
          </Text>
          <Tag borderRadius="full" variant="solid" colorScheme="green" ml="2">
            <TagLabel>{category}</TagLabel>
          </Tag>
        </Flex>
      </Flex>
    </CardHeader>
  );
};
