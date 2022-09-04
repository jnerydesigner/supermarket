import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fcfcfc;
  h1 {
    color: #824ed6;
  }
  color: #fcfcfc;
  img {
    width: 100px;
    margin-left: 20px;
  }
`;

export const BoxSubTotal = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 40px;
    font-size: 32px;
    color: #824ed6;
  }
`;
