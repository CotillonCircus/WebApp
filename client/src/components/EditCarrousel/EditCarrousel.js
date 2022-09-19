import React,{ useEffect, useState } from 'react';
import { addCarrouselImg, deleteCarrouselImg, getCarrouselImgs } from '../../redux/actions';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "./editCarrousel.css"
import  cloudinary from "cloudinary/lib/cloudinary";
import axios from 'axios';

const cloud_name = "circus-corillon"
const api_key = "164947681452799"
const api_secret = "Ii4cdvwbN_kI8YNLnc0xMnAyyjw"

cloudinary.config({
  cloud_name:cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export default function EditCloudinary(){
    const [carrouselImgs,setImgs] = useState([])

    useEffect(()=>{
        getCarrouselImgs(setImgs)
    },[])

    const deleteHandler = (e)=>{
        deleteCarrouselImg(e.target.value)
        const filtered = carrouselImgs.filter(img=>img.public_id!==e.target.value)
        setImgs([...filtered])
    }

    const handleAdd = (e)=>{
        addCarrouselImg(e,carrouselImgs,setImgs)
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setImgs([...carrouselImgs,{url:objectUrl}])

    }
    
    return(
        <div id="editCarrousel">
            <Header/>
            <Navbar/>
            <span>{!carrouselImgs.length?"cargando":"hay "+carrouselImgs.length+" imgs"}</span>
            <div id="carrouselImgs">
            {
                carrouselImgs?.map(img=>{
                    return(
                    <div className='carrouselImg'>
                        {img.public_id?<button onClick={deleteHandler} value={img.public_id}>delete</button>:<span>cargando</span>}
                        <img src={img.url}></img>
                    </div>
                )})
            }
            </div>
            <label>agregue una imagen</label>
            <input type="file" accept=".jpg, .jpeg, .png" onChange={handleAdd}></input>
            <Footer/>
        </div>
    )
}


