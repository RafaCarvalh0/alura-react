import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/livrosService';

const PesquisaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Titulo = styled.h2`
  color: ${props => props.theme.textoDestaque};
  font-size: 24px;
  margin-bottom: 10px;
  transition: color 0.3s ease;
`;

const Subtitulo = styled.h3`
  color: ${props => props.theme.textoDestaque};
  font-size: 18px;
  margin-bottom: 20px;
  transition: color 0.3s ease;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    color: ${props => props.theme.textoDestaque};
    transition: all 0.3s ease;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid ${props => props.theme.textoDestaque};
    }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
    }
    fetchLivros();
  }, []);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
          placeholder="Escreva sua próxima leitura"
          onChange={evento => {
              const textoDigitado = evento.target.value;
              const resultadoPesquisa = (livros || []).filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
              setLivrosPesquisados(resultadoPesquisa);
          }}
      />
      { livrosPesquisados.map( livro => (
          <Resultado key={livro.nome}>
              <img src={livro.src} alt={livro.nome}/>
              <p>{livro.nome}</p>
          </Resultado>
      ) ) }
    </PesquisaContainer>
  )
}

export default Pesquisa;