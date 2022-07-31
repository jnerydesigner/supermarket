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
          <Card icon />
          <Card icon />
          <Card icon />
          <Card icon />
          <Card icon />
          <Card icon />
        </BoxCard>
      </CollumnProd>
      <CollumnCart>
        <h2>Produtos Carrinho</h2>

        <BoxCard>
          <Card icon={false} />
          <Card icon={false} />
          <Card icon={false} />
          <Card icon={false} />
          <Card icon={false} />
          <Card icon={false} />
          <Card icon={false} />
        </BoxCard>
      </CollumnCart>
      <CollumnTicket>
        <h1>coluna 1</h1>
      </CollumnTicket>
    </Container>
  );
}
