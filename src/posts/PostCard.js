import React from "react";
import { Link } from "react-router-dom";
import lenovo from "../images/lenovo.jpg"
import style from "./Posts.module.css"
const PostCard = (props)=>{
    // console.log(props);
    return (
        <Link to={`/post/${props.post.id}`} className={style.PostCard}>
            
             <img src={props.post.image} className={style.imgCard}  width={"100%"}/>
            
            {/* description */}
            <div>
                <span className={style.author}>By: {props.post.author}</span>
                <h5>{props.post.title}</h5>
                <p>{props.post.info} </p>
            </div>
        </Link>
    )
}

export default PostCard