import styled from "styled-components";

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 1000;
`;

export const ModalFrame = styled.div`
  position: absolute;
  min-width: 500px;
  min-height: 300px;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: white;
  z-index: 1000;
`;

export const ModalTitle = styled.h3`
  color: #262626;
`;

export const ModalSubtitle = styled.div`
  color: #9e9e9e;
`;

export const ModalInputBox = styled.form`
  background-color: #fafafa;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
`;

export const ModalInputGroup = styled.div`
  margin: 16px;
`;

export const ModalInputTitle = styled.p`
  font-size: 16px;
`;

export const ModalInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  &:focus {
    outline: 0.1px solid black;
  }
`;
