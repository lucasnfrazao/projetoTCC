import React from 'react'
import styles from './UniversidadePage.module.css'

export default function CursosSection({ courses }) {
  return (
    <section className={styles.cursosSection}>
      <h2>Cursos</h2>
      <ul className={styles.courseList}>
        {courses.map((name, i) => (
          <li key={i} className={styles.courseItem}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}