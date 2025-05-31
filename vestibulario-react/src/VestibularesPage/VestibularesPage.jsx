import { useState, useEffect } from 'react';
import styles from './VestibularesPage.module.css'
import Section from './VestibularesPageSection.jsx'
import { API_BASE } from '../config.js';
import Modal from "../Modal.jsx";
import VestibularModal from "../Universidade/VestibularModal.jsx";


export default function VestibularesPage() {
    const [selectedUniversity, setSelectedUniversity] = useState(null)
    const [selectedVestibular, setSelectedVestibular] = useState(null);
    const [universities, setUniversities] = useState([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null)

     useEffect(() => {
        setLoading(true)
        const apiURL = `${API_BASE}/universidades`;
        fetch(apiURL)
          .then(res => {
            if (!res.ok) throw new Error('Not found')
            return res.json()
          })
          .then(data => {
            setUniversities(data)
            setError(null)
          })
          .catch(err => {
            console.error(err)
            setError(err)
          })
          .finally(() => setLoading(false))
      }, [])

    function onVestibularClick(vestibular, universidade) {
        console.log(universidade);
        setSelectedUniversity(universidade);
        setIsModalOpen(true);
        setSelectedVestibular(vestibular);
    }

    function onClose() {
        setIsModalOpen(false);
    }

    const renderLoading = () => 
    <div>Loading...</div>

    let universidadeSection

    if (loading) {
      universidadeSection = renderLoading()
    }
    else {
      universidadeSection = Object.values(universities).map(uni => {
        return <Section model={uni} selectedVestibular={selectedVestibular} onClick={onVestibularClick} isModalOpen={isModalOpen} onClose={onClose}></Section>
      });
    }

    return (
    <>
        <div className={styles.page}>
          <h2 className={styles.headerTitle}>Vestibulares por Universidade</h2>
          {universidadeSection}
        </div>
        <Modal isOpen={isModalOpen} onClose={onClose}>
          <VestibularModal vestibular={selectedVestibular} universidadeNome={selectedUniversity} />
        </Modal>
      </>
    )    
}