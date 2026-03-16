import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getFavoritos } from '../services/favoritosService';

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

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

const Resultado = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;

  p {
    color: #fff;
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid #fff;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function Favoritos() {
  const [tema] = useState('claro');
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <ThemeProvider theme={tema === 'claro' ? temaClaro : temaEscuro}>
      <AppContainer>
        <Titulo>Meus Favoritos</Titulo>
          <ResultadoContainer>
            {favoritos.map(favorito => (
              <Resultado>
                <img src={favorito.image} alt={favorito.nome} />
                <p>{favorito.nome}</p>
              </Resultado>
            ))}
          </ResultadoContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default Favoritos;