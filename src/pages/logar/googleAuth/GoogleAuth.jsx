import React from 'react'
import { GoogleLogin } from 'react-google-login'

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response) // Aqui você pode manipular a resposta do Google
    // Por exemplo, você pode acessar o token de autenticação usando response.accessToken
  }

  return (
    <div>
      <GoogleLogin
        clientId="SEU_ID_DO_CLIENTE_DO_GOOGLE"
        buttonText="Login com Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // Pode adicionar uma função diferente para lidar com falhas
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLoginButton
