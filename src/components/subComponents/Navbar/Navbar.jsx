import styles from './Navbar.module.css'
import React, { useState } from 'react';
export default function Navbar({ text, logo , listItems }) {
    const [activeTab, setActiveTab] = useState('home');
      const handleClick = (id) => {
        setActiveTab(id);
      };
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarHeader}>
                <div className={styles.navbarLogo}>
                    <img src={logo} />
                </div>
                <h5>{text}</h5>
            </div>
            <div className={styles.listContainer}>
                <ul>
                    {listItems.map((listItem, index) => {
                        return <li className={`${styles.liItem} ${activeTab === index? styles.liActive : ''}`} key={index} onClick={() => handleClick(index)}>{listItem}</li>
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}
