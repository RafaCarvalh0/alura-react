import Input from '../Input';
import styled from 'styled-components';

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

function Pesquisa() {
  return (
    <PesquisaContainer>
      <Titulo>Pesquisa</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input placeholder="Digite o nome do livro..." />
    </PesquisaContainer>
  );
}

export default Pesquisa;