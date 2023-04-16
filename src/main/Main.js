import React from "react";

// import Switch from "react-router-dom"
import Posts from "../posts/Posts"
// import PostDetails from "../PostDetails/PostDetails"
import style from "./Main.module.css"
const Main = ()=>{
    return (
      
        <main className= {style.Main}>
         <Posts/>
        </main>
      
      
    );
}

export default Main;