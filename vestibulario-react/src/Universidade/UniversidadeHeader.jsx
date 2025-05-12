import React from 'react'
import styles from './UniversidadePage.module.css'

export default function UniversityHeader({ university }) {
  return (
    <header className={styles.header}>
      <div className={styles.coverContent}>
        <div className={styles.coverWrapper}>
          {/* <span className={styles.typeBadge}>{university.type}</span> */}
          <img
            className={styles.coverImage}
            src={university.university.coverImageURL}
            alt= "imagem universidade"
          />
        </div>
        <div className={styles.headerInfo}>
          <h1 className={styles.name}>{university.university.nome}</h1>
          <p className={styles.location}>{university.university.cidade}</p>
          <p className={styles.followers}>
            0 seguidores
          </p>
          <button className={styles.followBtn}>
            Seguir Universidade
          </button>
        </div>
      </div>
    </header>
  )
}