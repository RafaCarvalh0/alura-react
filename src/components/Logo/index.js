import logo from '../../image/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
`;

const LogoImg = styled.img`
  margin-right: 20px;
`;


function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} className="logo-img" alt="logo"/>
      <p>Alura Books</p>
    </LogoContainer>
  );
}

export default Logo;