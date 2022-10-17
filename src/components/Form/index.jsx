import { useState } from "react"

import { FaEnvelope } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'

import * as S from './style'
import { Link } from "react-router-dom"



export const Form = ({ tipoPage = 'singUp', text = 'Member Login' }) => {

  return(
      <S.ConteinerForm>

        {tipoPage == 'singUp' && (
          <>
            <h1>{text}</h1>
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
            <div className="conteiner-form">
              <label htmlFor="senha"> <GiPadlock /> </label>
              <input type={'password'} id="senha" placeholder="Confirmar senha" />
            </div>
            <button type={'submit'}>Cadastra</button>
            <Link className="link" to={'/'}>Acesar a conata <span> <BsArrowRight/> </span></Link>
          </>
        )}
      </S.ConteinerForm>
  )
}
