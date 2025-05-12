import React, { useState } from 'react';
import UniversityHeader from './UniversidadeHeader';
import SidebarTabs from './BarraLateral';
import VestibularesSection from './VestibularesSection';
import CursosSection from './CursosSection.jsx';
import Modal from "../Modal";
import VestibularModal from "./VestibularModal.jsx";

import styles from './UniversidadePage.module.css'

const vestibular = {
    titulo: "Vestibular de Inverno 2026"
}

export default function UniversidadeProfilePage(university) {
  const [activeTab, setActiveTab] = useState('Vestibulares')
  const [isModalOpen, setIsModalOpen] = useState(false);

    function onVestibularClick() {
        setIsModalOpen(true);
        console.log("modal opening");
    }

  return (
      <>
          <div className={styles.page}>
              <UniversityHeader university={university} />

              <div className={styles.main}>
                  <div className={styles.mainContent}>
                      <SidebarTabs
                          tabs={['Vestibulares', 'Cursos', 'Sobre']}
                          activeTab={activeTab}
                          onTabClick={setActiveTab}
                      />

                      {activeTab === 'Vestibulares' && (
                          <VestibularesSection
                              vestibulares={university.university.vestibulares}
                              onSelect={onVestibularClick}
                          />
                      )}
                      {activeTab === 'Cursos' && (
                          <CursosSection courses={university.university.cursos} />
                      )}
                      {activeTab === 'Sobre' && (
                          <div className={styles.sobre}>
                              <h2>Sobre a Universidade</h2>
                              <p>{university.university.descricao}</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={ () => setIsModalOpen(false)}>
              <VestibularModal vestibular={vestibular} universidadeNome={"Pontifícia Universidade Católica do Rio de Janeiro"} />
          </Modal>
      </>
  )
}