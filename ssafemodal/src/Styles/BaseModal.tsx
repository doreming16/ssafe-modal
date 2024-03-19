import styled from "styled-components";

export const ModalFrame = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;
export const ModalBackground = styled.div`
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
min-width: 400px;
  z-index 300:
  position: absolute;
  align-items: center;
  background-color: white;
  padding: 10px 30px;
  border-radius: 5px;
`;

export const ModalTitleBox = styled.div`
  margin: 20px 0px;
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  color: #262626;
`;

export const ModalSubtitle = styled.div`
  color: #9e9e9e;
`;

export const ModalAlert = styled.div`
  font-size: 10px;
  color: orange;
`;

export const ModalInputBox = styled.form`
  margin: 10px 0px;
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
  min-height: 25px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  &:focus {
    outline: 0.1px solid black;
  }
`;

export const ModalTagBox = styled.div``;

export const ModalFooter = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
`;

export const ModalFooterCancel = styled(ModalButton)`
  color: grey;
`;

export const ModalFooterConfirm = styled(ModalButton)`
  color: black;
`;
