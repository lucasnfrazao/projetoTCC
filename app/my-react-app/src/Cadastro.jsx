import React from 'react';
import CustomInput from './CustomInput.jsx';
import './cadastro.css';

function Cadastro() {
    return (
        <div class="container">
            <div class="logo-section">
                {/* <img src="logo.png" alt="Vestibulário Logo" class="logo-icon" /> */}
                <h1 class="logo-title">Vestibulário</h1>
                <p class="logo-subtitle">O Futuro é seu.<br />A gente só mostra o caminho.</p>
            </div>

            <div class="form-section">
                <section class="title-section">
                    <h2>Criar Conta</h2>
                    <p>Já tem uma conta? <a href="#">Entre aqui.</a></p>
                </section>
                <form>
                    <div class="form-row">
                        <CustomInput title="Nome" type="text"/>
                        <CustomInput title="Sobrenome" type="text"/>
                    </div>
                    <div class="form-row">
                        <CustomInput title="Email" type="email"/>
                    </div>
                    <div class="form-row">
                        <CustomInput title="Senha" type="password"/>
                        <CustomInput title="Confirmar Senha" type="password"/>
                    </div>
                    <button type="submit">Confirmar Cadastro</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;