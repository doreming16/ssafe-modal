import React from "react";
import Header from "../BaseComponents/BaseHeader.tsx";
import { WriteButton } from "../Styles/MySpace.jsx";
import { Container, TextBoard } from "../Styles/Home.jsx";

const MySpace = () => {
  return (
    <>
      <Header HeaderLogo="마이스페이스" />
      <Container>
        <TextBoard>
          <WriteButton>새 설문 만들기</WriteButton>
        </TextBoard>
      </Container>
    </>
  );
};
export default MySpace;
