
import { FaEnvelope } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'

import * as S from './style'
import { Link } from "react-router-dom"

export const Form = ({ tipoPage = 'singUp' }) => {


  return(
      <S.ConteinerForm>

        {tipoPage == 'singUp' && (
          <>
            <h1>Member Login</h1>
            <div className="conteiner-form">
              <label htmlFor="email"> <FaEnvelope />  </label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="conteiner-form">
              <label htmlFor="senha"> <GiPadlock /> </label>
              <input type={'password'} id="senha" placeholder="Senha" />
            </div>
            <button type={'submit'}>Login</button>
            <Link className="link" to={'/singIn'}>Create your Account <span> <BsArrowRight/> </span></Link>
          </>
        )}
        {tipoPage != 'singUp' && (
          <>
            <div className="conteiner-form">
              <label htmlFor="email"> <FaEnvelope />  </label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="conteiner-form">
              <label htmlFor="senha"> <GiPadlock /> </label>
              <input type={'password'} id="senha" placeholder="Senha" />
            </div>
            <button type={'submit'}>Cadastra</button>
            <Link className="link" to={'/'}>access the account <span> <BsArrowRight/> </span></Link>
          </>
        )}
      </S.ConteinerForm>
  )
}
