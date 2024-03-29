import {
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { FC } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { useTranslation } from "react-i18next";

interface AuthModalProps extends Omit<ModalProps, "children"> {}

const tabData = [
  {
    label: "common.signup",
    component: SignupForm,
  },
  {
    label: "common.login",
    component: LoginForm,
  },
] as const;

export const AuthModal: FC<AuthModalProps> = ({ onClose, ...props }) => {
  const { t } = useTranslation();

  return (
    <Modal isCentered {...props} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{t("auth.modalTitle")}</ModalHeader>
        <ModalBody>
          <Tabs isFitted>
            <TabList>
              {tabData.map((tab) => (
                <Tab key={tab.label}>{t(tab.label)}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {tabData.map((tab) => (
                <TabPanel key={tab.label}>
                  <tab.component onClose={onClose} />
                </TabPanel>
              ))}
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
