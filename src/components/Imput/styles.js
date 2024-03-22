import styled from 'styled-components';
//mporta a função styled do pacote styled-components, que é usada para criar componentes estilizados em React.

export const ImputConteiner = styled.div`
    widht: 100%;
    height: 75px;
    background: #aaaaff;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input{
        width: 100%;
        height: 75px;
        background: #aaaaff;
        border: 0;
        float: right;
        clear: both;

        padding: 0 10px;

        font-size: 24px;
        font-family: 'Roboto';
        color: #fff
    }
`;