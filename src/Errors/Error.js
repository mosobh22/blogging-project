import React from "react";
import { Link } from "react-router-dom";
import style from "./error.module.css"
const Error = ()=>{
    return(
        <div className={style.error}>
            <h3>NOT Founded</h3>
            <Link to="/">Go to Home</Link>
        </div>
    );
}


export default Error;