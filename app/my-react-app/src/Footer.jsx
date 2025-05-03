import React from 'react';
import './footer.css';

function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <section className="logo-area">
                        <h1>Vestibulário</h1>
                        <p>O futuro na palma da sua mão.</p>
                    </section>

                    <section className="link-area">
                        <ul> 
                            <li>Início</li>
                            <li>Vestibulares</li>
                            <li>Perfil do Estudante</li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;