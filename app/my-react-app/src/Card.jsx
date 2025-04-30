function Card({ title }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>📌 Inscrição: até 15/08</p>
        <p>📝 Prova: 01/10</p>
        <button className="info-button">Mais Informações</button>
      </div>
    );
}

export default Card;