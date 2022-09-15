import { Container, ImgBox, BoxPrice } from "./styles";
import imgTapioca from "../../assets/tapioca.jpg";
import { PlusCircle } from "../../assets/plus-circle";
import { Trash } from "../../assets/trash";

interface PropsCard {
  icon: boolean;
}

export function Card({ icon }: PropsCard) {
  return (
    <Container>
      <ImgBox>
        <img src={imgTapioca} alt="Imagem da Tapioca" />
      </ImgBox>
      <h3>Tapioca</h3>
      <BoxPrice icon={icon}>
        {icon && (
          <button>
            <PlusCircle />
          </button>
        )}

        <h3>R$ 5,00</h3>

        {icon && (
          <button>
            <Trash />
          </button>
        )}
      </BoxPrice>
    </Container>
  );
}
