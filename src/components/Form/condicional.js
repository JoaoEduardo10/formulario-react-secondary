export const condicional = (email, senha, senhaConfirm, nameFisrt, lestName, confirm, navegate) => {

  if(confirm){
    if(email == '' || senha == '' || senhaConfirm == "" || nameFisrt == "" || lestName == ""){
      alert('Preencha todos os campos')
      return false
    }
    if(senha !== senhaConfirm){
      alert('As senhas não colidem')
      return false
    }

    sessionStorage.setItem(`dataPerson-${nameFisrt}`, `${JSON.stringify({nameFisrt, email, senha})}`)
    alert('Conta criada')
    return true

  } else {
    if(email == "" || senha == ''){
      alert('Preencha todos os campos')
      return false
    }

    if(sessionStorage.getItem(`dataPerson-${nameFisrt}`)){
      const pessoa = JSON.parse(sessionStorage.getItem(`dataPerson-${nameFisrt}`))


      if(email != pessoa.email){
        alert('email não existe')
        return false
      }

      if(senha != pessoa.senha){
        alert('senha não existe')
        return false
      }

      navegate('/home')

    } else {
      alert('Preencha o nome Corretamente')
      return false
    }

  }
}
