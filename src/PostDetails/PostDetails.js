import React from "react";
// import  {useSearchParams} from "react-router-dom"
import imag from "../images/lenovo.jpg"
import style from "./PostDetails.module.css"
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const PostDetails = (props)=>{ 
    const par = useParams();
    const url = `http://localhost:4000/posts/${par.id}`;
    let post, isload,errMsg;
    [post,isload,errMsg] = useFetch(url);
    console.log(post);
    console.log(errMsg);
    const error = ()=>{
        window.location.assign("http://localhost:3000/error");
    }
    
    if(errMsg === "Not Found"){
        error();
    }

    const handlDelete = ()=>{
        fetch(url,{
            method:"DELETE"
        }).then(()=>{window.location.assign("http://localhost:3000/");});

    }
    // const error = ()=>{
    //     window.location.herf = "http://localhost:3000/error";
    // }
    return (
        <>
            {post && 
                <article className="container post-details">
                    <div className={style.postTitle}>
                        <h1>{post?post.title : ""} </h1>
                        <button className="btn btn-warning" onClick={handlDelete}>Delete</button>
                    </div>
                    <img src={post?post.image:""}  className={style.postImage}/>
                    <p className={style.postDetails}>
                    {post?post.body:""}
                    </p>

                </article>
            }
            
        </>
        
        
    )
}


export default PostDetails