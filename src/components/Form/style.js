import styled from "styled-components";


export const ConteinerForm = styled.form`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  h1{
    margin-bottom: 3rem;
    font-family: 'Poppins', sans-serif;
    color: rgb(51, 51, 51);
    font-size: 1.8rem;
  }

  .conteiner-form{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }

  .conteiner-form label{
    position: absolute;
    left: 15%;
    top: 27%;
  }

  .conteiner-form input{
    width: 80%;
    height: 3rem;
    border: none;
    background-color: #E6E6E6;
    border-radius:30px;
    outline: none;
    padding-left: 3rem;
    font-size: 1rem;
    transition: all .3s;
  }

  .conteiner-form input:focus, .conteiner-form label:focus{
    box-shadow: 0 0 10px 4px green;
  }

  button{
    margin: 1rem 0;
    width: 78%;
    height: 3rem;
    border-radius: 30px;
    border: none;
    background-color: #57b846;
    color: #fff;
    transition: all .3s;
    font-size: 1.4em;
    cursor: pointer;
  }

  button:hover{
    background-color: #333333;
  }
  .link{
    margin-top: 1rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    line-height: 100%;
  }
  .link span{
    padding-top: .2rem;
  }

  .link:hover{
    color: #57b846;
  }

  @media (max-width: 1075px) {
    .conteiner-form input{
      font-size: .8rem;
    }
  }
`;
