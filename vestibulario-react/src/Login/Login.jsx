import styles from './Login.module.css';
import CustomInput from '../CustomInput/CustomInput.jsx';
import LogoComponent from '../LogoComponent/LogoComponent.jsx';

import api from '../services/api.js';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useAuth();

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('auth/login', formData);        
            login(response.data, response.data.token);
            navigate(`/`);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className={styles.container}>
            <LogoComponent/>

            <div className={styles.formSection}>
                <section className={styles.titleSection}>
                    <h2>Entrar</h2>
                    <p>Não tem conta ainda? <a href="/registro">Cadastre-se aqui.</a></p>
                </section>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <CustomInput name="email" title="Email" type="email" onChange={handleChange}/>
                    </div>
                    <div className={styles.formRow}>
                        <CustomInput name="password" title="Senha" type="password" onChange={handleChange}/>
                    </div>
                    <button className={styles.button} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;