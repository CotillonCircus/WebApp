import React from 'react'
import styles from "./AdminOrderCard.module.css"

const AdminOrderCard = ({id,products,userSub,fecha,userName,totalPrize}) => {
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
    <p>Usuario: {userName}</p>
    <p>Fecha de compra: {fecha.split("T")[0]}</p>
    <p className={styles.id}>Precio total: {totalPrize + "$"}</p>
  </div>
  )
}

export default AdminOrderCard