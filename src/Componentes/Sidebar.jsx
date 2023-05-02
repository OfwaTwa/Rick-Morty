import React, { useState } from "react";
import style from "../Style/Sidebar.module.css";
import icon from "../imagenes/portal.png";
import CottageIcon from "@mui/icons-material/Cottage";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TransgenderIcon from "@mui/icons-material/Transgender";
import ContactsIcon from "@mui/icons-material/Contacts";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  
  const clickOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={
          open === true ? `${style.sidebar} ${style.open}` : style.sidebar
        }
      >
        <div
          className={style.toggle}
          onClick={() => {
            clickOpen();
          }}
        >
          <ChevronRightIcon className={style.botonToggle} />
        </div>

        <div className={style.logo}>
          <img src={icon} alt="logo" />
          <h3>Menu</h3>
        </div>

        <nav
          onClick={(e) => {
            setActive(e.target.id);
          }}
        >
          <div className={style.nav_title}>Menú</div>
          <ul>
            <li
              className={
                active === "1"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="1"
            >
              <CottageIcon className={style.boton} />
              <span>Home</span>
            </li>
            <li
              className={
                active === "2"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="2"
            >
              <ContactsIcon className={style.boton} />
              <span>All the characters</span>
            </li>
            <li
              className={
                active === "3"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="3"
            >
              <LocalHospitalIcon className={style.boton} />
              <span>Alive/Dead</span>
            </li>
            <li
              className={
                active === "4"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="4"
            >
              <TransgenderIcon className={style.boton} />
              <span>Species</span>
            </li>
            <li
              className={
                active === "5"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="5"
            >
              <FormatListBulletedIcon className={style.boton} />
              <span>List</span>
            </li>
          </ul>

          <hr />

          <div className={style.nav_title}>Support</div>

          <ul>
            <li
              className={
                active === "6"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="6"
            >
              <HelpIcon fontSize="small" />
              <span>Get Help</span>
            </li>
            <li
              className={
                active === "7"
                  ? `${style.nav_item} ${style.active}`
                  : style.nav_item
              }
              id="7"
            >
              <ChatIcon fontSize="small" />
              <span>About us</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;