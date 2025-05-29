import UniversidadeCard from '../UniversidadeCard/UniversidadeCard.jsx';
import styles from './Perfil.module.css';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/user-profile.png';
import { useState, useEffect } from 'react';
import { API_BASE } from '../config.js';

function Perfil() {
    const [universidadeMap, setUniversities] = useState([])
    const [loading, setLoading] = useState(true)
    const { user, logout } = useAuth();

    let navigate = useNavigate();

    function handleLogoutClick() {
        navigate(`/`)
        logout();
    }

    useEffect(() => {
        if (user === null) {
            return
        }

        setLoading(true)
        const apiURL = `${API_BASE}/user/${user._id}/universidadesSeguidas`;
        fetch(apiURL)
          .then(res => {
            if (!res.ok) throw new Error('Not found')
            return res.json()
          })
          .then(data => {
            setUniversities(data)
            //setError(null)
          })
          .catch(err => {
            console.error(err)
            //setError(err)
          })
          .finally(() => setLoading(false))
      }, [user])

    const renderLoading = () => 
    <div>Loading...</div>

    
    let universidadeSection

    if (loading) {
        universidadeSection = renderLoading()
    }
    else {
        console.log(universidadeMap);
        universidadeSection = universidadeMap.universidades.map( uni =>
        <UniversidadeCard id={uni._id} title={uni.nome} cidade={uni.cidade} estado={uni.estado} img={uni.coverImageURL}/>
        )
    }

    let content

    const renderContent = () => {
        return (
            <div className={styles.page}>
            <div className={styles.profileHeader}>
                <div className={styles.profileHeaderContent}>
                    <img src={profileImage} alt="profile" className={styles.profileImage}></img>
                    <div className={styles.profileInformationSection}>
                        <h1>{user.name} {user.lastName}</h1>
                        <p>{user.email}</p>
                        <button className={styles.logoutButton} onClick={handleLogoutClick}>Sair da conta</button>
                    </div>
                </div>
            </div>

            <div className={styles.profileUniversidadeSection}>
                <h2 className={styles.cardHeader}>Universidades Seguidas</h2>
                <div className={styles.profileUniversidadeGrid}>
                    { universidadeSection }
                </div>
            </div>
        </div>
        )
    }

    if (user === null) {
        content = renderLoading()
    } else {
        content = renderContent()
    }

    

    return content
}

export default Perfil;