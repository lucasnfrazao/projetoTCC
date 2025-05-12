
import styles from './UniversidadePage.module.css'

export default function VestibularModal({vestibular, universidadeNome}) {

    return(
        <div className={styles.modalWrapper}>
            <div className={styles.modalHeader}>
                <div className={styles.modalHeaderContent}>
                    <h2>{vestibular.titulo}</h2>
                    <h3>{universidadeNome}</h3>
                    <span>Inscrições Abertas</span>
                </div>
            </div>
            <div className={styles.modalContentArea}>
                <h2>Datas do Vestibular</h2>
            </div>
        </div>
    )
}