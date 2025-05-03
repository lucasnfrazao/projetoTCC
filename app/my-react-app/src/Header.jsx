import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.title}>Vestibulário</h1>
        <nav>
          <div>
          <ul style={styles.navList}>
            <li><a href="/inicio" style={styles.link}>Início</a></li>
            <li><a href="/vestibulares" style={styles.link}>Vestibulares</a></li>
          </ul>
          </div>
        </nav>
        <div style={styles.login}>
              <button style={styles.loginButton}><a href="/login">Entrar</a></button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#00AFC2',
    padding: '20px',
    margin: '0',
    color: 'white'
  },
  headerContent: {
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    maxWidth: '1200px'
  },
  title: {
    margin: 0,
    fontFamily: 'Outfit',
    flex: 1
  },
  navList: {
    listStyle: 'none',
    flex: 1,
    display: 'flex',
    gap: '50px',
    padding: 0,
    height: '100%',
    fontFamily: 'Outfit'
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '20px'
  },
  login: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    fontFamily: 'Outfit',
    padding: '4px 24px',
    borderRadius: '8px',
    border: "none",
    fontSize: '20px',
    fontWeight: '500',
    color: '#00AFC2'
  }
};

export default Header;