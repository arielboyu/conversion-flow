import React from "react"
import "./Chats.css"

const Chats = () => {
    return (
        <div className="panel-box">
            <h1>Chats</h1>
            <div className="sms-card">
            <h3>Mensajes</h3>
            <h4 style={{color:'orange'}}>2.330</h4>
            </div>
            <div className="tasks-card">
            <h3>Borrados</h3>
            <h4 style={{color:'red'}}>100</h4>
            </div>
        </div>
    )
}




export default Chats;