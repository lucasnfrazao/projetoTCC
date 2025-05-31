import styles from './VestibularesPageSection.module.css'
import { useState } from 'react';
import Header from './VestibularesPageHeader.jsx';
import VestibularCard from '../Universidade/VestibularCard.jsx';

export default function VestibularesPageSection({model, selectedVestibular, onClick, isModalOpen, onClose}) {
    const vestibulares = model.vestibulares
    const title = model.nome;
    const subtitle = `${model.cidade}, ${model.estado}`

     let vestibularesSection

     if (vestibulares.length === 0) {
        vestibularesSection = (
            <div>Loading...</div>
        )
     } else {
         vestibularesSection = (
             vestibulares.map((vestibular, index) =>
                 <VestibularCard
                     key={index}
                     vestibular={vestibular}
                     onClick={() => onClick && onClick(vestibular, title)}
                 />
             )
         )
     }

    return (
        <>
        <div className={styles.sectionItem}> 
             <Header title={title} subtitle={subtitle}/>
             <div className={styles.vestibularGrid}>
                {vestibularesSection}
             </div>
        </div>  
        </> 
    )    
}

// universidadeNome={universidadeModel.nome}