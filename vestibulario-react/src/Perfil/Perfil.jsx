import styles from './Perfil.module.css';
import { useAuth } from '../hooks/useAuth';

function Perfil() {
    const { logout } = useAuth();

    function handleLogoutClick() {
        logout();
    }

    return(
        <div>
            <div className={styles.profileHeader}>
                <div className={styles.profileHeaderContent}>
                    <image className={styles.profileImage}></image>
                    <div className={styles.profileInformationSection}>
                        <h1>Lucas Nascimento</h1>
                        <p>lucasnfrazao@icloud.com</p>
                        <button onClick={handleLogoutClick}>Sair da conta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;