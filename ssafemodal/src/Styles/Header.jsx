import styled from "styled-components";

export const HeaderArea = styled.div`
  font-family: "Noto Sans KR";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1.5px 0px;
  border-bottom-color: #e0e0e0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: flex;
  height: flex;
  margin: 10px 30px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  &: Link;
`;
