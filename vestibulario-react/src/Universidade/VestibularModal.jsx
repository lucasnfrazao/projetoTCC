import styles from './UniversidadePage.module.css'
import VestibularDataCard from './VestibularDataCard';

export default function VestibularModal({vestibular, universidadeNome}) {
    const datas = vestibular.datas;
    return(
        <div className={styles.modalWrapper}>
            <div className={vestibular.status === 'aberto' ? styles.modalHeaderAberto : styles.modalHeaderEncerrado}>
                <div className={styles.modalHeaderContent}>
                    <h2>{vestibular.nome}</h2>
                    <h3>{universidadeNome}</h3>
                    <span>
                        {vestibular.status === 'aberto' ? 'Inscrições Abertas' : 'Vestibular Encerrado'}
                    </span>
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