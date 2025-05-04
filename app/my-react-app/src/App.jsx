import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Footer from './Footer/Footer.jsx';
import Cadastro from './Cadastro/Cadastro.jsx';

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </Router>
        );
    };
}