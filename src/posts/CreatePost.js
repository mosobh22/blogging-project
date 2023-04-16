import React, { useState } from "react";
import style from "./Posts.module.css"
import Confirme from "./uploadConfirm";
const CreatePost = ()=>{
    const [blogTitle,setBlogTitle] = useState("");
    const [blogImageUrl,setBlogImageUrl] = useState("");
    const [blogBody,setBlogBody] = useState("");
    const [blogAuthor,setBlogAuthor] = useState("logo");
    const [confirmMsg , updateConfirmMsg] = useState("done");
    const [operation , updateOperation] = useState({
        display:"none",
        transition:"all 0.6ms esea-in-out"
    });
    const object = {
        display:"block",
        transition:"all 0.6ms esea-in-out"

    }
    const url = "http://localhost:4000/posts";
    const handleForm = (e)=>{
        e.preventDefault();
        // console.log(blogTitle);
        // console.log(blogAuthor);
        // console.log(blogImageUrl);
        // console.log(blogBody);
        if(!blogTitle || !blogAuthor  || !blogImageUrl || !blogBody || !blogTitle){
            updateConfirmMsg("wrong");
            updateOperation(object);
            setTimeout(confirm , 3000);
            return;
        }
        const post = {
            title:blogTitle,
            author:blogAuthor,
            image:blogImageUrl,
            info:blogTitle,
            body:blogBody,
        }
        function confirm(){
            updateOperation({
                 display:"none",
                 transition:"all 0.8ms esea -out"
            });

        }
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(post)
        }).then((r)=>{
            console.log(r);
            // window.history.pushState('','','/');
            // console.log("post is uploaded successfully");
            if(r.statusText === "Created"){
                updateConfirmMsg("done");
            }else{
                updateConfirmMsg("wrong");
            }
            updateOperation(object);
            setTimeout(confirm , 3000);
        })
    }
    return (
        <section className={style.createPost}>
            <h1>Create Post</h1>
            <form onSubmit={handleForm} className={style.createPostForm}>
                <p>Blog Title</p>
                <input name="BlogTitle"  value={blogTitle} className={style.createPostFormInput} onChange={(e)=>setBlogTitle(e.target.value)}/>
                <p>Image URL</p>
                <input  type="url" value={blogImageUrl} className={style.createPostFormInput} onChange={(e)=>setBlogImageUrl(e.target.value)}/>
                <p>Blog Body</p>
                <textarea  className={style.createPostFormText} rows="10" value={blogBody} onChange={(e)=>{setBlogBody(e.target.value)}}></textarea>
                <p>Blog author</p>
                <select value={blogAuthor} className={style.createPostFormText} onChange={(e)=>setBlogAuthor(e.target.value)}>
                    <option value={"admine"}>admine</option>
                    <option value={"logo"}>logo</option>
                </select>
                <button className={style.btn} type="submit">Add Blog</button>
            </form>
            <div style={operation}>
                <Confirme style={confirmMsg}/>
            </div>
            
        </section>
    )


}


 export default CreatePost;