import React from 'react'
import styles from "./OrderCard.module.css"

const OrderCard = ({id,products,totalPrize}) => {
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
      <p className={styles.id}>Precio total: {totalPrize + "$"}</p>
    </div>
  )
}

export default OrderCard