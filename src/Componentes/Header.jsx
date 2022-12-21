import React from "react";
import style from "../Style/Header.module.css"
import icono from "../imagenes/RnM.png"

const Header = (props) => {
    return (
        <div className={style.header} >
            <img width="1000px" src={icono} alt="header" />
        </div>
    )
}

export default Header;