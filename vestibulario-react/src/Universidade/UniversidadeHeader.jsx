import styles from './UniversidadePage.module.css'
import { useAuth } from '../hooks/useAuth.js';
import api from '../services/api.js';

export default function UniversityHeader({ university }) {
  const { user } = useAuth();

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

  async function handleSeguirUniversidadeOnClick() {
    if (user === null) {
      return
    }
    try {
      const bodyData = {
        id: university.university._id,
        isFollowing: true
      };
      const response = await api.patch(`user/${user._id}`, bodyData)
      console.log(response);
    } catch(error) {
      console.log(error);
    }
    
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
          <p className={styles.location}>{university.university.cidade}, {university.university.estado}</p>
          <p className={styles.followers}>
            {getFollowerCountString()}
          </p>
          <button 
          className={styles.followBtn}
          onClick={handleSeguirUniversidadeOnClick}
          >
            Seguir Universidade
          </button>
        </div>
      </div>
    </header>
  )
}