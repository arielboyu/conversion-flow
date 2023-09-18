import React, { useState } from "react"
import "./login.css"
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';


const Login = ({ setAuth }) => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    const [showError, setShowError] = useState(false)

    const [inputs, setInputs] = useState({
        name: '',
        password: ''
    })


    const handleLogin = () => {
        if (inputs.email === 'test@test.com' && inputs.password === '1234') {
            setAuth(true)
        } else {
            setShowError(true)
            setAuth(false)
        }
    }

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className="login-box" >
            <div className="input-box">
                <h3 style={{ color: "#4B9CD3" }} >Inicia Sesion</h3>

                <div className="buttons-panel">
                    <input type="text" onChange={handleChange} name="email" placeholder="Correo Electronico" ></input>
                    <input type="password" onChange={handleChange} name="password" placeholder="Contraseña" ></input>
                    {
                        showError ? <h5 style={{ color: "red" }} >Usuario o password incorrectos</h5> : ''
                    }
                    <button onClick={() => handleLogin()} className="confirm-button" >Iniciar sesion</button>
                </div>
                <hr></hr>
                <div className="social-buttons">
                    <div>
                        <GoogleButton
                            textButton="Facebook"
                            style={{ height: '55px' }}
                            onClick={() => { console.log('Google button clicked') }}
                        />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <FacebookLogin
                            appId="1088597931155576"
                            fields="name,email,picture"
                            icon="fa-facebook"
                            className="face"
                            textButton="Facebook"
                            callback={responseFacebook}
                        />
                    </div>


                </div>
                <p className="password-reset">¿Olvidaste la contraseña?</p>
            </div>
        </div>
    )
}


export default Login;