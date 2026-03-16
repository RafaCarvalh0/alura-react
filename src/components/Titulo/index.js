import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.cor || props.theme.texto};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
    transition: all 0.3s ease;
`;