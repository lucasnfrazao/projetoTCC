import styles from './VestibularesPageSection.module.css'
import { useState } from 'react';
import Header from './VestibularesPageHeader.jsx';
import VestibularCard from '../Universidade/VestibularCard.jsx';
import Modal from "../Modal.jsx";
import VestibularModal from "../Universidade/VestibularModal.jsx";

export default function VestibularesPageSection(universidadeModel, selectedVestibular, onClick) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const vestibulares = universidadeModel.vestibulares

    return (
        <>
        <div> 
             <Header/>
             <div className={styles.vestibularGrid}>
                { 
                vestibulares.map((vestibular, index) =>
                    <VestibularCard
                        key={index}
                        vestibular={vestibular}
                        onClick={() => onClick && onClick(vestibular)}
                    />
                )
                }
             </div>
        </div>  
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <VestibularModal vestibular={selectedVestibular} />
            </Modal>
        </> 
    )    
}

// universidadeNome={universidadeModel.nome}