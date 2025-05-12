import React from 'react';
import CustomInput from '../CustomInput/CustomInput.jsx';
import LogoComponent from '../LogoComponent/LogoComponent.jsx';
import './cadastro.css';

import api from '../services/api.js';
import { useState } from 'react';

function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        // console.log('↪️ Campo alterado:', name, value);
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        //console.log(JSON.stringify(formData, null, 2));
        try {
            const response = await api.post('auth/register', formData)         
            console.log(response);
            // TODO: Fazer login automaticamente e navegar para rota /perfil.
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div class="container">
            <LogoComponent/>

            <div class="form-section">
                <section class="title-section">
                    <h2>Criar Conta</h2>
                    <p>Já tem uma conta? <a href="/login">Entre aqui.</a></p>
                </section>
                <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <CustomInput name="name" title="Nome" type="text" onChange={handleChange} value={formData.name}/>
                        <CustomInput name="lastName" title="Sobrenome" type="text" onChange={handleChange} value={formData.lastName}/>
                    </div>
                    <div class="form-row">
                        <CustomInput name="email" title="Email" type="email" onChange={handleChange} value={formData.email}/>
                    </div>
                    <div class="form-row">
                        <CustomInput name="password" title="Senha" type="password" onChange={handleChange} value={formData.password}/>
                        <CustomInput name="confirmPassword" title="Confirmar Senha" type="password" onChange={handleChange} value={formData.confirmPassword} />
                    </div>
                    <button type="submit">Confirmar Cadastro</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;