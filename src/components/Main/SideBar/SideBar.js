import React from "react"
import "./SideBar.css"
import panelButtons from "../../../config.json"
import { Link } from "react-router-dom";

const SideBar = ({setAuth}) => {
    return (
        <div className="sidebar-box">
            <div>
                <button onClick={ () => setAuth(false)} style={{backgroundColor:"transparent",color:'white',marginBottom:'6px',border:"none"}} >x</button>
            </div>
            <img   className="avatar-image"
                src={avatar} ></img>
            {
                panelButtons.map((item) =>
                <Link to={item.link} key={item.name} 
                className="button-list" >
                    <img className="item-image"
                    src={item.image} >
                    </img>{item.name}</Link>
                )
            }
        </div>
    )
}
const avatar = 'https://i.ibb.co/x3qkW3P/pngtree-user-avatar-boy-png-image-4693645.jpg'


export default SideBar

