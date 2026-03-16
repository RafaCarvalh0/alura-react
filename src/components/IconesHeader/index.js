import perfil from '../../image/perfil.svg';
import sacola from '../../image/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li
`
    width: 25px;
    cursor: pointer;
`;

const Icones = styled.ul
`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone className="icone"> <img src={icone} alt="Ícone" /> </Icone> 
            ))}
        </Icones>
    );
}  

export default IconesHeader;