import { Button, Flex, Textarea } from "@chakra-ui/react";
import { FC, FormEvent, useCallback } from "react";

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

  const submitHandler = useCallback(
    (event: FormEvent<HTMLDivElement>) => void handleSubmit(onSubmit)(event),
    [onSubmit],
  );

  return (
    <Flex w="100%" flexDir="column" as="form" onSubmit={submitHandler}>
      <Textarea
        w="100%"
        minH="36"
        placeholder={t("post.commentSection.placeholder")}
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
