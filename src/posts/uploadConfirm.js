import React from "react";
import "./confirm.css";
const Confirme = ({style})=>{
    const success = "uploaded successfully";
    const wrong = "wrong try again"

    return (
        <>
          <p className={style == "done" ? "success confirm-container" : "wrong confirm-container"}>{style === "done" ? success : wrong}</p>
        </>
    );
}


export default Confirme;