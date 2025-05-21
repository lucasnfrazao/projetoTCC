import styles from './UniversidadePage.module.css'

export default function VestibularDataCard({ data }) {
    function getDataString() {
        return `${data.startDate} a ${data.endDate}`
    }

    function getStringForDate(data) {
        const date = new Date(data);
        const string = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })

        return string
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