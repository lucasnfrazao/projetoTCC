import styles from './UniversidadePage.module.css'

export default function VestibularDataCard({ data }) {
    function getDataString() {
        return `${data.startDate} a ${data.endDate}`
    }

    return (
        <div className={styles.vestibularDataCard}>
            <div className={styles.vestibularDataCardContent}>
                <h1>{data.titulo}</h1>
                <p>{getDataString()}</p>
            </div>
        </div>
    )
}