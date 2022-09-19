import React,{ useEffect, useState } from 'react';

import cloudinary from "cloudinary/lib/cloudinary";
import axios from 'axios';


const cloud_name = "circus-corillon"
const api_key = "164947681452799"
const api_secret = "Ii4cdvwbN_kI8YNLnc0xMnAyyjw"

cloudinary.config({
            cloud_name:cloud_name,
            api_key: api_key,
            api_secret: api_secret,
            mode:"no-cors"
    });
    
    export default function Test(){
        const [t,setT] = useState([])

        async function traer (setT){
            const r = await axios.get("http://localhost:3001/test")
            console.log(r.data.resources)
            setT(r.data.resources)
        }
    
    return(
        <div onClick={()=>traer(setT)}>
        <span>{!t.length?"cargando":"hay "+t.length+" imgs"}</span>
        {
            t?.map(e=><img src={e.url}></img>)
        }
        </div>)
}


