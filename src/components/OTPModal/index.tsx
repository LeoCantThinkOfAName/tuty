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
import { FC, KeyboardEvent } from "react";
import { InputGroup, InputGroupItem } from "../InputGroup";

import { useTranslation } from "react-i18next";

interface OTPModalProps extends Omit<ModalProps, "children"> {
  title?: string;
}

const inputs = [0, 1, 2, 3, 4, 5];

export const OTPModal: FC<OTPModalProps> = ({ title, ...props }) => {
  const { t } = useTranslation();

  const createInputs = inputs.map((i, index) => {
    let hasValue: boolean;
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const key = e.key;
      const regex = /\d/g;
      if (value) {
        hasValue = true;
      } else {
        hasValue = false;
      }
      if (key === "Backspace") return key;
      if (!regex.test(key)) {
        e.preventDefault();
      }
      return key;
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      const { currentTarget } = e;
      const { value } = currentTarget;

      if (value !== "") {
        currentTarget.parentElement
          ?.querySelectorAll("input")
          [index + 1]?.focus();
      }

      if (!hasValue && value === "") {
        currentTarget.parentElement
          ?.querySelectorAll("input")
          [index - 1]?.focus();
      }
    };

    return (
      <InputGroupItem
        flex="1"
        h="16"
        fontSize="3xl"
        textAlign="center"
        maxLength={1}
        key={i}
        pattern="/\d/"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
    );
  });

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t(title as any)}</ModalHeader>
        <ModalBody>
          <Flex justifyContent="center">
            <InputGroup maxW="sm" hidden={true}>
              {createInputs}
            </InputGroup>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr="3">
            {t("otp.resentButton")}
          </Button>
          <Button variant="success" onClick={props.onClose}>
            {t("common.submit")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

OTPModal.defaultProps = {
  title: "otp.title",
  isOpen: false,
};
