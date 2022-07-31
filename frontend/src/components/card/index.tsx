import { Container, ImgBox, BoxPrice } from "./styles";
import imgTapioca from "../../assets/tapioca.jpg";
import { PlusCircle } from "../../assets/plus-circle";
import { Trash } from "../../assets/trash";

export function Card() {
  return (
    <Container>
      <ImgBox>
        <img src={imgTapioca} alt="Imagem da Tapioca" />
      </ImgBox>
      <h3>Tapioca</h3>
      <BoxPrice>
        <button>
          <PlusCircle />
        </button>
        <h3>R$ 5,00</h3>
        <button>
          <Trash />
        </button>
      </BoxPrice>
    </Container>
  );
}
