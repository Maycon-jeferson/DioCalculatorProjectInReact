import styled from 'styled-components';
//mporta a função styled do pacote styled-components, que é usada para criar componentes estilizados em React.

export const ButtonConteiner = styled.button`
    padding: 10px;
    border: 1px solid #000;
    background: #3B3B3B;
    color: #F2F2F2;
    font-size: 24px;
    font-weighyt: 700;
    flex: 1;

    &:hover{
        opacity: 0.6;
    }
`;