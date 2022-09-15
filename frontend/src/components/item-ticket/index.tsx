import { Container, LineOne, LineTwo } from "./styles";

export function ItemTicket() {
  return (
    <Container>
      <LineOne>
        <span>Cerveja</span>
        <span>QTD 2</span>
      </LineOne>
      <LineTwo>
        <span>Preço Unit R$ 5,00</span>
        <span>Sub Total: R$ 10,00</span>
      </LineTwo>
    </Container>
  );
}
