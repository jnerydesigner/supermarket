import { ItemTicket } from "../item-ticket";
import { Container, CompanyInformation, Divider } from "./styles";
import QrCode from "../../assets/qr-code.png";

export function Ticket() {
  return (
    <Container>
      <CompanyInformation>
        <div>
          <h1>Supermartket Brand</h1>
        </div>

        <span>Endereço Rua 5 de maio, Bairro Agoras, Manaus - AM</span>
        <span>Inscrição stadual: 2502591</span>
        <span>CNPJ: 38.360.065/0001-10</span>
      </CompanyInformation>

      <ItemTicket />
      <ItemTicket />
      <ItemTicket />

      <div>
        <Divider>
          <img src={QrCode} alt="qr code google" />
          <h3>Total $ 32,00</h3>
        </Divider>
      </div>
    </Container>
  );
}
