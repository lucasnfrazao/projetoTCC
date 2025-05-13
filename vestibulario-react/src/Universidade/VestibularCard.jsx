import styles from './UniversidadePage.module.css'

export default function VestibularCard({ vestibular, onClick }) {
    const proximoEvento = vestibular.datas[0];

    return (
        <div
            className={styles.card}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <div className={styles.cardHeader}>
                <h3>{vestibular.nome}</h3>
                <span
                    className={styles.statusBadge}
                    //style={{ backgroundColor: statusColor }}
                >
                    {/* {data.status} */}
                </span>
            </div>
            <ul className={styles.detailsList}>
                <li>
                    <p> Próximo Evento: {proximoEvento.titulo} </p>
                    <p> Data: {proximoEvento.data} </p>
                </li>
            </ul>
            <button className={styles.infoBtn}>Mais Informações</button>
        </div>
    )
}