import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';

function Card({ id, title, img }) {

    let navigate = useNavigate();

    function handleCardOnClick() {
      navigate(`/universidade/${id}`)
    };

    return (
      <div className={styles.card}>
        <img src={img} alt={"universidade"}></img>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>Inscrição: até 15/08</p>
        <p>Prova: 01/10</p>
        <button className={styles.infoButton} onClick={handleCardOnClick}>Mais Informações</button>
      </div>
    );
}

export default Card;