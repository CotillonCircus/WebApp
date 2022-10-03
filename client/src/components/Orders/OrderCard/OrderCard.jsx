import React from 'react'
import { useSelector } from 'react-redux'
import { cancelOrder } from '../../../redux/actions'
import styles from "./OrderCard.module.css"


const OrderCard = ({id,products,totalPrize,diference}) => {
  
  const userLogged  = useSelector(state=>state.userLogged)

  function deleteOrder(id){
    const {name,email} = userLogged[0]
    cancelOrder(name,email,id,window.location.origin)  
  }

  return (
    <div className={styles.bigContainer}>
      <p className={styles.id}>Id de orden: {id}</p>
      {
        products?.map((product)=>{
          return(
            <div key={product.name} className={styles.container}>
              <img src={product.img} alt={product.name} className={styles.img}/>
              <p className={styles.name}>{product.name}</p>
              <p>Precio unitario: {product.price + "$"}</p>
              <p>Cantidad: {product.cantBuyed}</p>
            </div>
          )
        })
      }
      <div>
        <p className={styles.id}>Precio total: {totalPrize + "$"}</p>
        {diference<0&&<button id="deletedOrderbutton" onClick={()=>deleteOrder(id)}>cancel order</button>}
      </div>
    </div>
  )
}

export default OrderCard