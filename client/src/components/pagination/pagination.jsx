import React from "react"
import "./Pagination.css"

export default function Pagination({array, page, setPage, limit}){
    
    const totalPages = []
    const totalElements = Math.ceil(array.length/limit)
    for(var i=1;i<=totalElements;i++){
        totalPages.push(i);
    } 
    const lastPage = totalPages.at(-1)
    const firtsPage = totalPages[0]
    const firstToRender = page<3?0:page-3
    
    if(!array.length)return <></>

    return(
        <div id="paginate"> 
            {page!==firtsPage?<button className="prevButton" onClick={()=>setPage(page-1)}>Anterior</button>:<span>{"["}</span>}
            {
                totalPages.slice(firstToRender,page+2).map(i=><button key={"buttonNumber"+i} id={page===i?"currentPage":""} className={"pageButton"} onClick={()=>setPage(parseInt(i))}>{i}</button>)
            }
            {page!==lastPage?<button className="nextButton" onClick={()=>setPage(page+1)}>Siguiente</button>:<span>{"]"}</span>}
            {/* <span id="actualPage">pagina {page}</span> */}
        </div>
    )
}