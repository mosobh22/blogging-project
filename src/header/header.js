import React from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom";

const Header = ()=>{
    // console.log(style.head);
    return (
        <header  className={style.head}>
           <h4><i className="fa-solid fa-blog"></i> <span>logo</span></h4>
           <ul className={style.nav}>
              <li className={style.navItem}><Link className={style.nvaLink} to="/">home</Link></li>
              <li className={style.navItem}><Link className="btn btn-outline-light" to="creat-post">New Post</Link></li>
           </ul>
        </header>
    )

}

export default Header
