import { useAuth } from '../hooks/useAuth';

function Perfil() {
    const { logout } = useAuth();

    function handleLogoutClick() {
        logout();
    }

    return(
        <div>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}

export default Perfil;