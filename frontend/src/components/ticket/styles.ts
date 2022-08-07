import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #000;
  overflow: scroll;
`;

export const CompanyInformation = styled.div`
  height: 150px;
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 2px solid #000;
  div {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  height: 250px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
  }
  h3 {
    font-size: 32px;
  }
`;
