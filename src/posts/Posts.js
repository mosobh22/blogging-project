import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import style from "./Posts.module.css"
import useFetch from "../useFetch"
const Posts = ()=>{
    // you have card information so you will send this information to card component
    // from API or Database or from firebase
    const url = "http://localhost:4000/posts";
    const [posts,isload,errMsg] = useFetch(url);
    return (
        <section className={style.PostsContainer}>
            {posts && posts.map((element)=>{
                return(
                    <PostCard key={element.id} post={element}/>
                )
            })
            }
            {isload && <h3>Loading ... </h3>}
            {!posts && !isload && <h4 className={style.errorMsg}>{errMsg}</h4>}
        </section>
    )
}


export default Posts;