import styled from "styled-components";

interface PropsStylesCard {
  icon: boolean;
}

export const Container = styled.div`
  height: 180px;
  width: 150px;
  background-color: #b2bec3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #824ed6;
  color: #fcfcfc;
  border-radius: 5px;
  h3 {
    color: #824ed6;
  }
`;

export const ImgBox = styled.div`
  height: 80px;
  width: 80px;
  border: 2px solid #824ed6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #824ed6;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const BoxPrice = styled.div<PropsStylesCard>`
  height: 50px;
  width: 100%;
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: ${(props) =>
    props.icon === true ? "space-between" : "center"};
  align-items: center;
  flex-direction: row;
  button {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
  }
`;
