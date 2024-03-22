import styled from 'styled-components'
//mporta a função styled do pacote styled-components, que é usada para criar componentes estilizados em React.

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    background: #dadada;

    display: flex;
    align-items: center;
    justify-content: center
`

export const Content = styled.div`
    background: #fff;
    width: 50%%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    alingn-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: colunm;
    justify-content: space-between;
    alingn-items: center;
`