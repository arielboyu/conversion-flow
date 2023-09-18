import React from "react"
import "./Leads.css"

const Leads = () => {
    return (
        <div className="panel-box">
            <h1>Leads</h1>
            <div className="sms-card">
            <h3>Ganancias</h3>
            <h4 style={{color:'green'}}>5.600</h4>
            </div>
            <div className="tasks-card">
            <h3>Productos</h3>
            <h4 style={{color:'violet'}}>354</h4>
            </div>
        </div>
    )
}




export default Leads;