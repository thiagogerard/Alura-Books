import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo/index.js";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00'>Últimos Lancamenmtos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt='livro'/>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos