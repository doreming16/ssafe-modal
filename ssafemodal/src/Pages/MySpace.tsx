import React, { useState } from "react";
import BaseHeader from "../BaseComponents/BaseHeader.tsx";
import {
  MenuContainer,
  MySpaceContainer,
  TabContainer,
  WriteButton,
  TabButton,
  SearchBox,
  SearchButton,
  OrderButton,
  CardBox,
} from "../Styles/MySpace.tsx";
import BaseCard from "../BaseComponents/BaseCard.tsx";
import { BiSolidSearch } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";
import BaseModal from "../BaseComponents/BaseModal.tsx";

const MySpace = () => {
  const [modalOpen, setModalopen] = useState(false);

  const OpenModal = () => {
    setModalopen(true);
  };

  return (
    <>
      <BaseHeader HeaderLogo="마이스페이스 👨‍💻" nickname={"현명"} />
      <MenuContainer>
        <WriteButton onClick={OpenModal}>새 설문 만들기</WriteButton>
        {modalOpen && (
          <BaseModal
            title="새로운 설문지를 작성합니다."
            subtitle="새로운 설문지를 만들기 위한 설정입니다."
            inputTitle1="설문지 이름을 입력하세요."
            inputTitle2="설문지 설명을 입력하세요."
            cancel="취소하기"
            confirm="확인"
          ></BaseModal>
        )}
        <TabContainer>
          <TabButton>보관함</TabButton>
          <TabButton disabled={true}>참여한 설문</TabButton>
        </TabContainer>
      </MenuContainer>
      <MySpaceContainer>
        <SearchBox>
          <SearchButton>
            프로젝트를 검색하세요
            <BiSolidSearch />
          </SearchButton>
          <OrderButton>
            최근에 수정된 순서
            <IoCaretDownSharp />
          </OrderButton>
        </SearchBox>
        <CardBox>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
        </CardBox>
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
