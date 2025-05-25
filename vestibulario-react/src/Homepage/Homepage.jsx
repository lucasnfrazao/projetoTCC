import UniversidadeCard from '../UniversidadeCard/UniversidadeCard.jsx';
import homeIcon from '../assets/svg-home.svg';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../config.js';
import { useState, useEffect } from 'react';

import styles from './Homepage.module.css';

function HomePage() {

  const [universities, setUniversities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    const apiURL = `${API_BASE}/universidades`;
    fetch(apiURL)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => {
        setUniversities(data)
        setError(null)
      })
      .catch(err => {
        console.error(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  function handlePress() {
    console.log(universities)
    //navigate(`/universidades`)
  }

  const renderLoading = () => 
    <div>Loading...</div>

  let universidadeSection

  if (loading) {
    universidadeSection = renderLoading()
  }
  else {
    universidadeSection = Object.values(universities).map( uni =>
      <UniversidadeCard id={uni._id} title={uni.nome} cidade={uni.cidade} estado={uni.estado} img={uni.coverImageURL}/>
    )
  }

  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>O futuro é seu.<br />A gente te mostra o caminho.</h1>
          <button className={styles.ctaButton} onClick={handlePress}>Encontrar Vestibulares</button>
        </div>
        <img src={homeIcon} alt="graphic" className={styles.heroImage} />
      </section>

      <hr className={styles.divider} />

      <section className={styles.cardsSection}>
        <h2 className={styles.cardHeader}>Universidades</h2>
        <div className={styles.cardList}>
          { universidadeSection }
        </div>
      </section>
    </div>
  );
}

export default HomePage;