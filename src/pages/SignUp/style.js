import styled from 'styled-components'


export const Conteiner = styled.div`
    background-color: #fff;
    width: 70vw;
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 1017px) {
      width: 95vw;
    }
`;
