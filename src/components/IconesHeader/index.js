import perfil from '../../image/perfil.svg';
import sacola from '../../image/sacola.svg';
import './style.css';

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className="icones">
            {icones.map((icone) => (<li className="icone"> <img src={icone} alt="Ícone" /> </li> ))}
        </ul>
    );
}  

export default IconesHeader;