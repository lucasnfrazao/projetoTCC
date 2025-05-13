import styles from './UniversidadePage.module.css'
import VestibularDataCard from './VestibularDataCard';

export default function VestibularModal({vestibular, universidadeNome}) {
    const datas = vestibular.datas;
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
                <div className={styles.vestibularDataCardSection}>
                    {
                        datas.map( (data, index) =>
                            <VestibularDataCard key={index} data={data} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}