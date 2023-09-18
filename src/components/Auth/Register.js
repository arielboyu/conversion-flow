import React from "react"
import "./login.css"
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';


const Register = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div className="login-box" >
            <div className="input-box">
                <h3 style={{ color: "#4B9CD3" }} >Crea tu cuenta</h3>
                <div className="buttons-panel">
                    <input placeholder="Correo Electronico" ></input>
                    <button className="confirm-button" >Crea tu cuenta</button>
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
                <p className="password-reset">Al inscribirte, aceptas nuestros Términos de servicio y Política de Privacidad</p>
            </div>
        </div>
    )
}


export default Register;