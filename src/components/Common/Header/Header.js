import React, { useState } from "react"
import "./Header.css"
import Login from "../../Auth/Login"
import Register from "../../Auth/Register"


const Header = ({setAuth}) => {
    const [selected, setSelected] = useState('')

    const changeModal = (value) => {
        setSelected(value)
    }
    return (
        <div className="header-box">
            <div className="header-items" >
                <section className="logo-box">
                    <h3 style={{color:'#00008B',fontStyle:'bolder',fontSize:'26px'}} >Conversion Flow</h3>
                    {/* <img className="header-logo" alt="logo"
                        src="https://i.ibb.co/pbNbDcp/www-unsitiogenial-es.png" ></img> */}
                </section>
                <section className="buttons-box" >
                    {
                        selected === 'register' ?
                            <button onClick={() => changeModal('login')} className="login-button" >Iniciar sesion</button> : ''
                    }
                    {
                        selected === 'login' ?
                            <button onClick={() => changeModal('register')} className="register-button" >Crear cuenta</button> : ''
                    }
                    {
                        !selected ?
                            <div>
                                <button onClick={() => changeModal('login')} className="login-button" >Iniciar sesion</button>
                                <button onClick={() => changeModal('register')} className="register-button" >Crear cuenta</button>
                            </div>
                            : <button onClick={() => changeModal('')} className="register-button" >X</button>
                    }
                </section>
            </div>
            {/* SELECCIONADO  */}
            {
                selected === 'login' ?
                    <Login  setAuth={setAuth}/>
                    : ''
            }
            {selected === 'register' ?

                <Register />
                : ''
            }
        </div>
    )
}

export default Header;