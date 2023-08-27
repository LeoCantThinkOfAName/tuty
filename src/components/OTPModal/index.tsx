import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { FC, FormEvent } from "react";
import { InputGroup, InputGroupItem } from "../InputGroup";

import { AuthService } from "../../services/auth";
import { useTranslation } from "react-i18next";

interface OTPModalProps extends Omit<ModalProps, "children"> {
  title?: string;
}

export const OTPModal: FC<OTPModalProps> = ({ title, onClose, ...props }) => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) =>
    void handleSubmit(async (data) => {
      await AuthService.verifyOtp(data.token).then(() => {
        onClose();
      });
    })(event);

  const createInputs = Array.from("123456").map((key) => {
    return (
      <InputGroupItem
        flex="1"
        h="16"
        fontSize="3xl"
        textAlign="center"
        type="number"
        key={key}
        mx="1"
      />
    );
  });

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <form onSubmit={submitHandler}>
        <ModalContent>
          <ModalHeader>
            {t(title as unknown as TemplateStringsArray)}
          </ModalHeader>
          <ModalBody>
            <Flex justifyContent="center">
              <Controller
                name="token"
                control={control}
                render={({ field }) => (
                  <InputGroup maxW="sm" maxLength={1} {...field}>
                    {createInputs}
                  </InputGroup>
                )}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr="3" type="button">
              {t("otp.resentButton")}
            </Button>
            <Button variant="success" type="submit">
              {t("common.submit")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

OTPModal.defaultProps = {
  title: "otp.title",
  isOpen: false,
};
