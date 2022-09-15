import { BoxSubTotal, Container } from "./styles";
import Logo from "../../assets/logo.png";
import { ShoppingCart } from "../../assets/shopping-cart";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo do supermercado" />
      <h1>Supermarket Brand</h1>
      <BoxSubTotal>
        <ShoppingCart />
        <span>R$ 50,00</span>
      </BoxSubTotal>
    </Container>
  );
}
