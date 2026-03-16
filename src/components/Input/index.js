import styled from "styled-components";

const Input = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid ${props => props.theme.bgSecundario};
    border-radius: 5px;
    font-size: 16px;
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.texto};
    transition: all 0.3s ease;

    &::placeholder {
        color: ${props => props.theme.texto};
        opacity: 0.7;
    }
`;

export default Input;