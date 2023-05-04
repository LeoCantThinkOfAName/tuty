import { Button, Flex, Textarea } from "@chakra-ui/react";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface CommentSectionProps {
  onCancel: () => void;
  onSubmit: (data: typeof defaultValues) => unknown;
}

const defaultValues = {
  comment: "",
};

export const CommentSection: FC<CommentSectionProps> = ({
  onCancel,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <Flex
      w="100%"
      flexDir="column"
      as="form"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <Textarea
        w="100%"
        minH="36"
        placeholder={t("post.commentSection.placeholder") as string}
        {...register("comment", {
          required: true,
        })}
      />
      <Flex mt="3" justifyContent="end">
        <Button mr="3" variant="ghost" onClick={onCancel}>
          {t("post.commentSection.cancel")}
        </Button>
        <Button variant="success" type="submit">
          {t("post.commentSection.submit")}
        </Button>
      </Flex>
    </Flex>
  );
};
