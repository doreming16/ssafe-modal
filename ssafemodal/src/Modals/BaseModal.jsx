import React from "react";
import { Container } from "../Styles/Home.jsx";
// import styled from "styled-components";
import {
  ModalBackground,
  ModalFrame,
  ModalTitle,
  ModalSubtitle,
  ModalInputBox,
  ModalInputGroup,
  ModalInputTitle,
  ModalInput,
} from "../Styles/BaseModal.jsx";

const BaseModal = () => {
  return (
    <>
      <ModalBackground></ModalBackground>
      <Container>
        <ModalFrame>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalSubtitle>Modal Subtitle</ModalSubtitle>
          <ModalInputBox>
            <ModalInputGroup>
              <ModalInputTitle>설문지 이름을 입력하세요</ModalInputTitle>
              <ModalInput placeholder="내용을 입력하세요."></ModalInput>
            </ModalInputGroup>
          </ModalInputBox>
        </ModalFrame>
      </Container>
    </>
  );
};
export default BaseModal;
