import React from 'react'
import styles from "./AdminOrderCard.module.css"
import { Button } from "react-bootstrap";
import { deleteOrderAction } from '../../../redux/actions';
import { confirmAlert } from 'react-confirm-alert';

const AdminOrderCard = ({id,products,fecha,user,totalPrize,setFlag}) => {

  function deleteOrder(id){
    confirmAlert({
      title: 'Eliminara esta orden',
      message: '¿Está seguro?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            deleteOrderAction(id)
            setFlag(flag=>!flag)
          }
        },
        {
          label: 'No',
        },
      ],
    });
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
    <p>Usuario: {user?.name}</p>
    <p>Fecha de compra: {fecha.split("T")[0]}</p>
    <p className={styles.id}>Precio total: {totalPrize + "$"}</p>
    <Button className={styles.deleteOrderButton} onClick={()=>deleteOrder(id)}>borrar</Button>
  </div>
  )
}

export default AdminOrderCard