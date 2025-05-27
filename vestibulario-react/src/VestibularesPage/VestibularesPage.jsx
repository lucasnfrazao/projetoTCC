import { useState, useEffect } from 'react';
import styles from './VestibularesPage.module.css'
import Section from './VestibularesPageSection.jsx'
import { API_BASE } from '../config.js';


export default function VestibularesPage() {
    const [selectedVestibular, setSelectedVestibular] = useState(null);
    const [universities, setUniversities] = useState([])
    const [loading, setLoading] = useState(true)
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

    function onVestibularClick(vestibular) {
        setSelectedVestibular(vestibular);
    }

    const renderLoading = () => 
    <div>Loading...</div>

    let universidadeSection

    if (loading) {
        universidadeSection = renderLoading()
    }
    else {
        universidadeSection = Object.values(universities).map( uni =>
        <Section universidadeModel={uni} selectedVestibular={selectedVestibular} onClick={onVestibularClick}></Section>
        )
    }

    return (
    <div className={styles.page}>
        <h2 className={styles.headerTitle}>Vestibulares</h2>
        {universidadeSection}
    </div>
    )    
}