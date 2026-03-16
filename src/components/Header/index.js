import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header
`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;