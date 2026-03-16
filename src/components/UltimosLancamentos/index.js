import { livros } from './dadosUltimosLancamentos';

function UltimosLancamentos() {
    return (
        <section>
            <h2>Últimos Lançamentos</h2>
            {livros.map((livro) => {
                return (
                    <img src={livro.src} alt={livro.nome} />
                )
            })}
        </section>
    );
}

export default UltimosLancamentos;