import VestibularCard from './VestibularCard'
import styles from './UniversidadePage.module.css'

export default function VestibularesSection({ vestibulares, onSelect }) {
  return (
    <section className={styles.vestibularesSection}>
      <h2 className={styles.vestibularHeader}>Vestibulares</h2>
      <div className={styles.cardsGrid}>
        { 
        vestibulares.map( (vestibular, index) => 
          <VestibularCard
            key={index}
            vestibular={vestibular}
            onClick={() => onSelect && onSelect(vestibular)}
          />
        )
        }
      </div>
    </section>
  )
}