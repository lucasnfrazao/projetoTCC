import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.jsx';
import Homepage from './Homepage.jsx';
import Footer from './Footer.jsx';
import Cadastro from './Cadastro.jsx';

export default class App extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <Cadastro/>
                {/* <Footer/> */}
            </>
        );
    };
}