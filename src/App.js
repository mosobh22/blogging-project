import React from "react"
import {Routes , Route} from "react-router-dom"
import Header from "./header/header"
import Footer from "./footer/footer"
import Posts from "./posts/Posts"
import Error from "./Errors/Error"
import Main from "./main/Main"
import PostDetails from "./PostDetails/PostDetails"
import CreatePost from "./posts/CreatePost"
import style from "./App.module.css"
// import "./header/header.model.css"
function App() {
  return (
    
        <div className={style.body}>
            <Header />
           
            <Routes>
                <Route path="/"  element={<Main />}/>
                // send parameter to posts to display specific post or clicked post
                <Route path="/post/:id" element={<PostDetails/>} />
                <Route path="/creat-post" element= {<CreatePost/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
           
            <Footer />
        </div>

    
    
  );
}

export default App;
