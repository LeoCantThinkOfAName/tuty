import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { FC } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { useTranslation } from "react-i18next";

interface AuthModalProps extends Omit<ModalProps, "children"> {}

export const AuthModal: FC<AuthModalProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("auth.modalTitle")}</ModalHeader>
        <ModalBody>
          <Tabs isFitted>
            <TabList>
              <Tab>{t("common.signup")}</Tab>
              <Tab>{t("common.login")}</Tab>
            </TabList>
            <TabPanels>
              <SignupForm />
              <LoginForm />
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Link>{t("auth.tncLink")}</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
