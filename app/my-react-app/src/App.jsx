import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import AppRoutes from './Routes/routes';
import Cadastro from './Cadastro/Cadastro.jsx';
import Login from './Login/Login.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <AppRoutes />
            </Router>
        );
    };
}