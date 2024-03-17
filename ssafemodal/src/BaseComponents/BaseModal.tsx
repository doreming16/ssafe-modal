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
  ModalButtonBox,
} from "../Styles/BaseModal.jsx";

type Props = {
  title?: string;
  subtitle?: string;
  alert?: string;
  inputTitle?: string;
};

const BaseModal = ({ title, subtitle, alert, inputTitle }: Props) => {
  return (
    <>
      <ModalBackground></ModalBackground>
      <ModalContainer>
        <ModalFrame>
          <ModalTitleBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalSubtitle>{subtitle}</ModalSubtitle>
            <ModalAlert>{alert}</ModalAlert>
          </ModalTitleBox>
          <ModalInputBox>
            <ModalInputGroup>
              <ModalInputTitle>{inputTitle}</ModalInputTitle>
              <ModalInput></ModalInput>
            </ModalInputGroup>
          </ModalInputBox>
          <ModalButtonBox></ModalButtonBox>
        </ModalFrame>
      </ModalContainer>
    </>
  );
};
export default BaseModal;
