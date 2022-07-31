import { Card } from "../card";
import {
  Container,
  CollumnCart,
  CollumnProd,
  CollumnTicket,
  BoxCard,
} from "./styles";

export function Main() {
  return (
    <Container>
      <CollumnProd>
        <h2>Produtos Gerais</h2>
        <BoxCard>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </BoxCard>
      </CollumnProd>
      <CollumnCart>
        <h1>coluna 1</h1>
      </CollumnCart>
      <CollumnTicket>
        <h1>coluna 1</h1>
      </CollumnTicket>
    </Container>
  );
}
