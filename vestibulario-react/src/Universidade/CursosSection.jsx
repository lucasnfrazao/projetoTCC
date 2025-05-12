import React from 'react'
import styles from './UniversidadePage.module.css'

export default function CursosSection({ courses }) {
  return (
    <section className={styles.cursosSection}>
      <h2>Cursos</h2>
      <ul className={styles.courseList}>
        {courses.map(curso => (
          <li key={curso._id} className={styles.courseItem}>
            {curso.nome}
          </li>
        ))}
      </ul>
    </section>
  )
}