import { useState } from 'react';
import Pesquisa from '../components/Pesquisa';
import styled, { ThemeProvider } from 'styled-components';

const temaClaro = {
  bgHeader: '#ffffff',
  texto: '#333333',
  textoDestaque: '#ffffff',
  bgApp: 'linear-gradient(90deg, #002f52 35%, #326589 165%)',
  bgSecundario: '#ebecee',
  bgCard: '#ffffff'
};

const temaEscuro = {
  bgHeader: '#1a1a1a',
  texto: '#f5f5f5',
  textoDestaque: '#f5f5f5',
  bgApp: 'linear-gradient(90deg, #0a1929 35%, #132f4c 165%)',
  bgSecundario: '#121212',
  bgCard: '#242424'
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => props.theme.bgApp};
  transition: background-image 0.3s ease;
`;

function Favoritos() {
  const [tema] = useState('claro');

  return (
    <ThemeProvider theme={tema === 'claro' ? temaClaro : temaEscuro}>
      <AppContainer>
        <Pesquisa />
      </AppContainer>
    </ThemeProvider>
  );
}

export default Favoritos;