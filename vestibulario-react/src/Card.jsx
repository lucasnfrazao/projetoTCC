import { useNavigate } from 'react-router-dom';

function Card({ id, title }) {

    let navigate = useNavigate();

    function handleCardOnClick() {
      navigate(`/universidade/${id}`)
    };

    return (
      <div className="card">
        <h3>{title}</h3>
        <p>Inscrição: até 15/08</p>
        <p>Prova: 01/10</p>
        <button className="info-button" onClick={handleCardOnClick}>Mais Informações</button>
      </div>
    );
}

export default Card;