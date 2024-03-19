import React from "react";
import {
  ModalContainer,
  ModalBackground,
  ModalFrame,
  ModalTitleBox,
  ModalTitle,
  ModalSubtitle,
  ModalAlert,
  ModalInputBox,
  ModalInputGroup,
  ModalInputTitle,
  ModalInput,
  ModalTagBox,
  ModalFooter,
  ModalFooterCancel,
  ModalFooterConfirm,
} from "../Styles/BaseModal.tsx";
import { GrFormPreviousLink } from "react-icons/gr";

type Props = {
  isOpen?: boolean;
  title: string;
  subtitle?: string;
  alert?: string;
  inputTitle1?: string;
  inputTitle2?: string;
  confirm?: string;
  cancel?: string;
  closeModal?: () => void;
};

const BaseModal = ({
  title,
  subtitle,
  alert,
  inputTitle1,
  inputTitle2,
  confirm,
  cancel,
  closeModal,
}: Props) => {
  return (
    <>
      <ModalFrame>
        <ModalBackground onClick={closeModal}></ModalBackground>
        <ModalContainer>
          <ModalTitleBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalSubtitle>{subtitle}</ModalSubtitle>
            <ModalAlert>{alert}</ModalAlert>
          </ModalTitleBox>
          <ModalInputBox>
            <ModalInputGroup>
              <ModalInputTitle>{inputTitle1}</ModalInputTitle>
              <ModalInput></ModalInput>
              <ModalInputTitle>{inputTitle2}</ModalInputTitle>
              <ModalInput></ModalInput>
            </ModalInputGroup>
          </ModalInputBox>
          <ModalTagBox></ModalTagBox>
          <ModalFooter>
            <ModalFooterCancel onClick={closeModal}>
              <GrFormPreviousLink />
              {cancel}
            </ModalFooterCancel>
            <ModalFooterConfirm>{confirm}</ModalFooterConfirm>
          </ModalFooter>
        </ModalContainer>
      </ModalFrame>
    </>
  );
};
export default BaseModal;
