import React from "react"
import "./Calendar.css"

const Calendar = () => {
    return (
        <div className="panel-box">
            <h1>Agenda</h1>
            <div className="sms-card">
            <h3>Reuniones</h3>
            <h4 style={{color:'yellow'}}>20</h4>
            </div>
            <div className="tasks-card">
            <h3>Proximo mes</h3>
            <h4 style={{color:'red'}}>10</h4>
            </div>
        </div>
    )
}




export default Calendar;