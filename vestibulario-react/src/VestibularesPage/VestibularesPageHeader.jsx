import styles from './VestibularesPageHeader.module.css'

export default function VestibularesPageHeader({title, subtitle}) {
    return (
    <div className={styles.headerContent}>
        <h2 className={styles.headerTitle}>{title}</h2>
        <p className={styles.headerSubtitle}>{subtitle}</p>
    </div>
    )    
}