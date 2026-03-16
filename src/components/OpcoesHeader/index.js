import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li
`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #ffae00;
    }
`;

const Opcoes = styled.ul
`
    display: flex;
    gap: 15px;
`;

const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`} key={texto} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Opcao>
                        <p>{texto}</p>
                    </Opcao>
                </Link>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;