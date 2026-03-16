import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import styled from 'styled-components';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../image/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: ${props => props.theme.bgSecundario};
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s ease;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#ee8b09" 
                tamanhoFonte="36px" 
                >Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => {
                    return (
                        <img src={livro.src} alt={livro.nome} key={livro.nome} />
                    )
                })}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez vc se interesse por..."
                subtitulo="Angular"
                descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                img = {imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;