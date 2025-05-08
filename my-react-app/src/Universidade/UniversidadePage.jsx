import React, { useState } from 'react'
import UniversityHeader from './UniversidadeHeader'
import SidebarTabs from './BarraLateral'
import VestibularesSection from './VestibularesSection'
import CursosSection from './CursosSection.jsx'
import styles from './UniversidadePage.module.css'

// Dados falsos para teste
const university = {
  type: 'Particular',
  name: 'Pontifícia Universidade Católica do Rio de Janeiro',
  location: 'Rio de Janeiro, RJ',
  followers: 1320,
  coverImageUrl: '/images/puc-rj.jpg',
}

const vestibulares = [
  {
    id: 1,
    title: 'Vestibular de Inverno 2026',
    inscriptionDeadline: '15/08',
    examDate: '01/10',
    status: 'Aberto',
  },
  {
    id: 2,
    title: 'Vestibular de Inverno 2025',
    inscriptionDeadline: '15/08',
    examDate: '01/10',
    status: 'Encerrado',
  },
]

const courses = [
  'Administração',
  'Arquitetura e Urbanismo',
  'Artes Cênicas',
  'Ciência da Computação',
  'Ciências Biológicas',
  'Ciências Econômicas',
  'Ciências Sociais',
  'Design (Comunicação Visual, Mídia Digital, Moda, Projeto de Produto)',
  'Direito (Diurno e Noturno)',
  'Educação (Pedagogia)',
  'Engenharia Ambiental',
  'Engenharia Civil',
  'Engenharia de Computação',
  'Engenharia de Controle e Automação',
  'Engenharia de Materiais e Nanotecnologia',
  'Engenharia de Petróleo',
]

export default function UniversidadePage() {
  const [activeTab, setActiveTab] = useState('Vestibulares')

  return (
    <div className={styles.page}>
      <UniversityHeader university={university} />

      <div className={styles.main}>
        <SidebarTabs
          tabs={['Vestibulares', 'Cursos', 'Sobre']}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />

        {activeTab === 'Vestibulares' && (
          <VestibularesSection
            vestibulares={vestibulares}
          />
        )}
        {activeTab === 'Cursos' && (
          <CursosSection courses={courses} />
        )}
        {activeTab === 'Sobre' && (
          <div className={styles.sobre}>
            <h2>Sobre a Universidade</h2>
            <p>…conteúdo sobre a uni…</p>
          </div>
        )}
      </div>
    </div>
  )
}