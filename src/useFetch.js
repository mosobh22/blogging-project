import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data , setData] = useState();
    const [isload , setIsLoad] = useState();
    const [errMsg,setErrorMsg] = useState(null);
    // this function make load to data from API 
    useEffect(()=>{
         setIsLoad(true);
         fetch(url).then(res=>{
            // console.log(res.json());
            if(!res.ok){
                // if(res.statusText.length == 0)
                throw res.statusText ? res.statusText : "Error";
                // throw Error(res.statusText);
            }
            return res.json();
         }).then(data=>{
            // console.log(data);
           setIsLoad(false);
           setData(data);
         }).catch(err=>{
            setIsLoad(false);
            // console.log(err);
            setErrorMsg(err);
            // console.log(errMsg);
            })      
    },
    [url]);


return [data,isload,errMsg];
}


export default useFetch;