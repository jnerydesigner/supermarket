import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fcfcfc;
  display: grid;
  grid-template-columns: 1fr 1fr 500px;
`;

export const CollumnProd = styled.div`
  h2 {
    color: #824ed6;
    text-align: center;
    margin-bottom: 20px;
  }
  width: 100%;
  height: 80vh;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-right: 3px solid #fcfcfc;
`;

export const BoxCard = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  padding: 5px;
  overflow: scroll;
`;
export const CollumnCart = styled.div`
  h2 {
    color: #824ed6;
    text-align: center;
    margin-bottom: 20px;
  }
  width: 100%;
  height: 80vh;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const CollumnTicket = styled.div`
  height: 80vh;
  background-color: #fffce5;
`;
