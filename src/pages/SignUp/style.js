import styled from 'styled-components'


export const Conteiner = styled.div`
    background-color: #fff;
    width: 70vw;
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 5px;

    @media (max-width: 1075px) {
      width: 95vw;
    }

    @media (max-width: 825px) {
      .img{
        display: none;
      }
      form{
        width: 87%;
      }
    }
`;
