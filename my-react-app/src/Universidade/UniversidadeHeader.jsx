import React from 'react'
import styles from './UniversidadePage.module.css'

export default function UniversityHeader({ university }) {
  return (
    <header className={styles.header}>
      <div className={styles.coverWrapper}>
        <span className={styles.typeBadge}>{university.type}</span>
        <img
          className={styles.coverImage}
          src={university.coverImageUrl}
          alt={university.name}
        />
      </div>
      <div className={styles.headerInfo}>
        <h1 className={styles.name}>{university.name}</h1>
        <p className={styles.location}>{university.location}</p>
        <p className={styles.followers}>
          {university.followers} seguidores
        </p>
        <button className={styles.followBtn}>
          Seguir Universidade
        </button>
      </div>
    </header>
  )
}