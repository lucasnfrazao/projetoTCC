import styles from './Header.module.css'
import { useAuth } from './hooks/useAuth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderAutenticado(isMobile) {
    return (
      <div className={isMobile ? styles.loginMobile : styles.login}>
        <Link to="/perfil">Olá, {user.name}</Link>
      </div>
    )
  }

  function renderSemLogin(isMobile) {
    return (
      <div className={isMobile ? styles.loginMobile : styles.login}>
        <button className={styles.loginButton}><a href="/login">Entrar</a></button>
      </div>
    )
  }

  function renderButton() {
    return (
    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
    </button>
    )
  }

  function renderButtons() {
    return (
      <span>
        <ul className={isMenuOpen ? styles.navListMobileOpen : styles.navListMobile}>
          <li><a href="/" className={styles.link}>Início</a></li>
          <li><a href="/universidades" className={styles.link}>Universidades</a></li>
          {isAuthenticated ? renderAutenticado(true) : renderSemLogin(true)}
        </ul>
       
      </span>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}><a href="/">Vestibulário</a></h1>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className={styles.navList}>
            <li><a href="/" className={styles.link}>Início</a></li>
            <li><a href="/universidades" className={styles.link}>Universidades</a></li>
          </ul>
        </nav>
        {isAuthenticated ? renderAutenticado(false) : renderSemLogin(false) }
        {renderButton()}
      </div>
      {renderButtons()}
    </header>
  );
}

export default Header;