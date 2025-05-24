import { useNavigate } from 'react-router-dom';
import styles from '../Homepage/Homepage.module.css';

function UniversidadeCard({ id, title, cidade, estado, img }) {

    let navigate = useNavigate();

    function handleCardOnClick() {
      navigate(`/universidade/${id}`)
    };

    return (
      <div className={styles.card}>
        <img src={img} alt={"universidade"}></img>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>{cidade}, {estado}</p>
        <button className={styles.infoButton} onClick={handleCardOnClick}>Mais Informações</button>
      </div>
    );
}

export default UniversidadeCard;