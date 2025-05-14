import styles from './Perfil.module.css';
import { useAuth } from '../hooks/useAuth';
import profileImage from '../assets/user-profile.png';

function Perfil() {
    const { user, logout } = useAuth();

    function handleLogoutClick() {
        logout();
    }

    return(
        <div>
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

            <div className>

            </div>
        </div>
    )
}

export default Perfil;