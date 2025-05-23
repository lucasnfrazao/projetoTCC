import styles from './UniversidadePage.module.css'
import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import api from '../services/api.js';

export default function UniversityHeader({ university }) {
  const { user, setUser } = useAuth();
  const [ isFollowing, setIsFollowing ] = useState(false);
  const [ followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    if (user === null) {
      return 
    }

    if (!Array.isArray(user.universidadesSeguidas)) {
      return
    }

    const uniId = university.university._id;
    const isFollowing = user.universidadesSeguidas.includes(uniId);
    setIsFollowing(isFollowing);

    async function getUsuariosSeguindo() {
      const usuariosSeguindo = await api.get(`universidades/${uniId}/seguidores`)
      setFollowingCount(usuariosSeguindo.data.seguidores);
    }
    
    getUsuariosSeguindo();
  }, [user, university, setIsFollowing, setFollowingCount])

  async function handleSeguirUniversidadeOnClick() {
    if (user === null) {
      return
    }
    try {
      const uniId = university.university._id;
      const isFollowing = user.universidadesSeguidas.includes(uniId)

      const bodyData = {
        id: uniId,
        isFollowing: !isFollowing
      };

      const response = await api.patch(`user/${user._id}`, bodyData)
      const updatedUser = response.data
      setUser(updatedUser);
      
      const isNowFollowing = user.universidadesSeguidas.includes(uniId);
      setIsFollowing(isNowFollowing);

      const usuariosSeguindo = await api.get(`universidades/${uniId}/seguidores`)
      setFollowingCount(usuariosSeguindo.data.seguidores);
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
            {`Seguidores: ${followingCount}` }
          </p>
          <button 
          className={styles.followBtn}
          onClick={handleSeguirUniversidadeOnClick}
          >
            { isFollowing ? "Seguindo" : "Seguir Universidade" }
          </button>
        </div>
      </div>
    </header>
  )
}