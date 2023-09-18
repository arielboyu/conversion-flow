import React from "react"
import "./Panel.css"

const Panel = () => {
    return (
        <div className="panel-box">
            <h1>Bienvenido User</h1>
            <div className="sms-card">
            <h3>Mensajes Recibidos</h3>
            <h4 style={{color:'green'}}>0</h4>
            </div>
            <div className="tasks-card">
            <h3>Tareas Realizadas</h3>
            <h4 style={{color:'violet'}}>0</h4>
            </div>
        </div>
    )
}




export default Panel;