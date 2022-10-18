import { useEffect, useState } from "react"
import { Form } from "../../components/Form"

import * as S from './style'

export const SingIn = () => {

    return(
        <S.Cadastro>
          <Form navigate='/' confirm={true} text={"Singn In"} textButton="Create" textlink="Page de login" />
        </S.Cadastro>
    )
}
