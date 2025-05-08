import React from 'react'
import styles from './UniversidadePage.module.css'

export default function VestibularCard({ data, onClick }) {
    const statusColor = data.status === 'Aberto' ? '#2EC4B6' : '#333'

    return (
        <div
            className={styles.card}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <div className={styles.cardHeader}>
                <h3>{data.title}</h3>
                <span
                    className={styles.statusBadge}
                    style={{ backgroundColor: statusColor }}
                >
                    {data.status}
                </span>
            </div>
            <ul className={styles.detailsList}>
                <li>
                    <input type="checkbox" disabled /> Inscrição: até {data.inscriptionDeadline}
                </li>
                <li>
                    <input type="checkbox" disabled /> Prova: {data.examDate}
                </li>
            </ul>
            <button className={styles.infoBtn}>Mais Informações</button>
        </div>
    )
}