import { useContext, useEffect } from "react"
import { Context } from "../../components/context"
import { Form } from "../../components/Form"

import * as S from './style'

export const SingIn = () => {
  const context = useContext(Context)

  const { state } = context

    return(
        <S.Cadastro>
          <h1>SingIn</h1>
          <Form tipoPage="cadastra"/>
        </S.Cadastro>
    )
}
