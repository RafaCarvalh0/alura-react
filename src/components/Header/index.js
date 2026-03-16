import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.bgHeader};
  color: ${props => props.theme.texto};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
`;

const LadoDireito = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #ee8b09; /* Cor de destaque para o modo escuro ativado */
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc; /* Cor do fundo no modo claro */
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

function Header({ tema, setTema }) {
  const alterarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <LadoDireito>
        <IconesHeader />
        <ToggleContainer title="Mudar tema">
          <ToggleInput type="checkbox" checked={tema === 'escuro'} onChange={alterarTema} />
          <ToggleSlider />
        </ToggleContainer>
      </LadoDireito>
    </HeaderContainer>
  );
}

export default Header;