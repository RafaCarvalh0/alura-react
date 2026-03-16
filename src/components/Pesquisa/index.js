import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitulo = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
          placeholder="Escreva sua próxima leitura"
          onBlur={evento => {
              const textoDigitado = evento.target.value
              const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
              setLivrosPesquisados(resultadoPesquisa)
          }}
      />
      { livrosPesquisados.map( livro => (
          <Resultado>
              <img src={livro.src}/>
              <p>{livro.nome}</p>
          </Resultado>
      ) ) }
    </PesquisaContainer>
  )
}

export default Pesquisa;