import styles from './VestibularesPageHeader.module.css'

export default function VestibularesPageHeader() {
    return (
    <div className={styles.headerContent}>
        <h2 className={styles.headerTitle}>Universidade do Estado de São Paulo</h2>
        <p className={styles.headerSubtitle}>São Paulo, SP</p>
    </div>
    )    
}