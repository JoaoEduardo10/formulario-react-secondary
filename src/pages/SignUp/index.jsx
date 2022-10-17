import { Form } from '../../components/Form';
import img from "../../img/img-01.webp"

import * as S from './style';

export const SingUp = () => {
    return(
        <S.Conteiner>
          <div className='img'>
            <img src={img} alt='imagem de notbook' />
          </div>
          <Form />
        </S.Conteiner>
    )
};
