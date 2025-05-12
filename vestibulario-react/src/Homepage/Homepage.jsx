import Card from '../Card.jsx';
import homeIcon from '../assets/svg-home.svg';

import './homepage.css';

function HomePage() {
    function handlePress() {
      const token = localStorage.getItem('token');
      // const decoded = jwtDecode(token);

      // const id = decoded.id;
      // console.log(id);
    }

    return (
      <div className="homepage">
        <section className="hero">
          <div className="hero-text">
            <h1 className="hero-title">O Futuro é seu.<br />A gente só mostra o caminho.</h1>
            <button className="cta-button" onClick={handlePress}>Encontrar Universidades</button>
          </div>
          <img src= {homeIcon} alt="graphic" className="hero-image" />
        </section>

        <hr className="divider"/>
  
        <section className="cards-section">
          <h2 className="card-header">Universidades</h2>
          <div className="card-list">
            <Card id={"67fabf1c01763bd7ff4e97dd"} title="PUC-Rio" />
            <Card title="PUC-RS" />
            <Card title="PUC-SP" />
          </div>
        </section>
      </div>
    );
}

export default HomePage;