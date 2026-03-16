import styled from "styled-components";
import { Titulo } from "../Titulo";

const Subtitulo = styled.h4`
    color: #ee8b09;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

const Card = styled.div`
    align-items: center;
    background-color: ${props => props.theme.bgCard};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    transition: background-color 0.3s ease;
`;

const Botao = styled.button`
    background-color: #ee8b09;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;

const Descricao = styled.p`
    max-width: 300px;
    color: ${props => props.theme.texto};
    transition: color 0.3s ease;
`

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
        <div>
            <Titulo tamanhoFonte="16px" cor="#ee8b09" alinhamento="left">{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
        </div>
        <div>
            <ImgLivro src={img} alt={titulo} />
            <Botao>Saiba Mais</Botao>
        </div>
    </Card>
  );
}

export default CardRecomenda;