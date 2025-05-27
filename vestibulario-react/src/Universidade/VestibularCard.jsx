import styles from './UniversidadePage.module.css'

export default function VestibularCard({ vestibular, onClick }) {
    const statusColor = () => {
        if (vestibular.status === "aberto") {
            return '#00AFC2'
        } else {
            return '#6B7280'
        }
    }

    return (
        <div
            className={styles.card}
            onClick={onClick}
            style={{ 
                cursor: onClick ? 'pointer' : 'default',
                background: statusColor()
             }}
        >
            <div 
            className={styles.cardHeader}
            >
                <h3>{vestibular.nome}</h3>
                <span className={styles.statusBadge} >
                    {vestibular.status}
                </span>
            </div>
            <button className={styles.infoBtn}>Mais Informações</button>
        </div>
    )
}