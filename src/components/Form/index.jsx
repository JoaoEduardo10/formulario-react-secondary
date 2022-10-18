
import { FaEnvelope } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'
import { MdDriveFileRenameOutline } from "react-icons/md"

import * as S from './style'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { condicional } from './condicional'

export const Form = ({ text, textlink, textButton, confirm = false, navigate }) => {
  const [email, setEmail] = useState('')
  const [nameFisrt, setNameFisrt] = useState('')
  const [lestName, setLestName] = useState('')
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaComfirm] = useState('')
  const navegate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    if(condicional(email, senha, senhaConfirm, nameFisrt, lestName, confirm, navegate)){
      setEmail('')
      setNameFisrt('')
      setSenha('')
      setSenhaComfirm('')
    }

  }

  return(
      <S.ConteinerForm onSubmit={handleSubmit}>
            <h1>{text}</h1>
              <div className="conteiner-form">
                <label htmlFor="name"> <MdDriveFileRenameOutline /> </label>
                <input
                  onChange={({ target }) => setNameFisrt(target.value)}
                  type={'text'}
                  id="name"
                  value={nameFisrt}
                  placeholder="First Name"
                />
              </div>
              {confirm && (
                <div className="conteiner-form">
                <label htmlFor="name"> <MdDriveFileRenameOutline /> </label>
                <input
                  onChange={({ target }) => setLestName(target.value)}
                  type={'text'}
                  id="name"
                  value={lestName}
                  placeholder="last Name"
                />
              </div>
              )}
            <div className="conteiner-form">
              <label htmlFor="email"> <FaEnvelope />  </label>
              <input
                onChange={({ target }) => setEmail(target.value)}
                type="email"
                id="email"
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="conteiner-form">
              <label htmlFor="senha"> <GiPadlock /> </label>
              <input
                onChange={({ target }) => setSenha(target.value)}
                type={'password'}
                id="senha"
                value={senha}
                placeholder="Senha"
              />
            </div>
            {confirm && (
              <div className="conteiner-form">
                <label htmlFor="confirmasenha"> <GiPadlock /> </label>
                <input
                  onChange={({ target }) => setSenhaComfirm(target.value)}
                  type={'password'}
                  id="confirmasenha"
                  value={senhaConfirm}
                  placeholder="Confirmasenha"
                />
              </div>
            )}
            <button type={'submit'}>{textButton}</button>
            <Link className="link" to={ navigate }>{textlink}<span> <BsArrowRight/> </span></Link>
      </S.ConteinerForm>
  )
}
