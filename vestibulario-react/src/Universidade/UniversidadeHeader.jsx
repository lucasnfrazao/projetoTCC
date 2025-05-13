import React from 'react'
import styles from './UniversidadePage.module.css'

export default function UniversityHeader({ university }) {

  function getFollowerCountString() {
    const usuariosSeguindo = university.university.usuariosSeguindo;

    if (!usuariosSeguindo) {
      return 0
    }
    
    const numUsuarios = usuariosSeguindo.length;

    if (numUsuarios === 1) {
      return `${numUsuarios} seguidor`
    } else {
      return `${numUsuarios} seguidores`
    }
  }

  function handleSeguirUniversidadeOnClick() {
    console.log("Clicou para seguir universidade!")
  }

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
            {getFollowerCountString()}
          </p>
          <button 
          className={styles.followBtn}
          onClick={handleSeguirUniversidadeOnClick()}
          >
            Seguir Universidade
          </button>
        </div>
      </div>
    </header>
  )
}