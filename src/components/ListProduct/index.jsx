import React from 'react'
import productos from "../../mocks/api/listado.json"
import CardProduct from '../CardProduct'
import styles from "./listProduct.module.css"

export default function ListProduct() {
  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>Recomendaciones</h2>
      <div className={styles.container}>
          {productos.map((p) => <CardProduct key={p.id} producto={p}></CardProduct>)}
      </div>
    </div>
  )
}