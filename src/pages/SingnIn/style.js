import styled from "styled-components";

export const Cadastro = styled.div`
    background-color: #fff;
    min-width: 70vw;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      margin-bottom: 2rem;
    }

    @media (max-width: 1075px) {
      width: 95vw;
      form{
        width: 50%;
      }
    }

    @media (max-width: 731px) {
      form{
        width: 90%;
      }
    }

`
