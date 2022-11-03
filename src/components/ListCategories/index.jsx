import React from 'react'
import category from "../../mocks/api/categories.json"
import CardCategories from '../CardCategories'
import styles from "./listCategories.module.css"

export default function ListCategories() {
  return (
    <>
    <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>
      <div className={styles.container}>
          {category.map((c) => <CardCategories key={c.id} category={c}/>)}
      </div>
    </>
  )
}