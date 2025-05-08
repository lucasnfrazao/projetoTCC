import React from 'react'
import styles from './UniversidadePage.module.css'

export default function SidebarTabs({ tabs, activeTab, onTabClick }) {
    return (
        <nav className={styles.sidebar}>
            <ul>
                {tabs.map(tab => (
                    <li
                        key={tab}
                        className={tab === activeTab ? styles.activeTab : ''}
                        onClick={() => onTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </nav>
    )
}