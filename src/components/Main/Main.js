import React from "react"
import SideBar from "./SideBar/SideBar"
import { Routes, Route } from "react-router-dom"
import Panel from "../Views/Panel/Panel"
import Leads from "../Views/Leads/Leads"
import Chats from "../Views/Chats/Chats"
import Calendar from "../Views/Calendar/Calendar"
import "./Main.css"

const Main = ({setAuth}) => {
  return (
    <div className="main-box">
      <SideBar setAuth={setAuth}/>
      <div className="routes-box" >
        <Routes>
          <Route path="/panel" element={<Panel />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>

    </div>
  )
}

export default Main