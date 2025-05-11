import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer/Footer.jsx';
import AppRoutes from './Routes/routes';
import { AuthProvider } from './context/AuthContext';

export default class App extends React.Component {
    render() {
        return (
            <AuthProvider>
                <Router>
                    <Header />
                    <AppRoutes />
                    <Footer />
                </Router>
            </AuthProvider>
        );
    };
}