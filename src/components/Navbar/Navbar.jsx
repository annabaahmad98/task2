import styles from './Navbar.module.css'
import React, { useState } from 'react';
import toggle from '../../assets/images/icons/toggle.png'

export default function Navbar({ text, logo, listItems }) {
    const [activeTab, setActiveTab] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = (index) => {
        setActiveTab(index);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };
    return (
        <div className={styles.navbarContainer}>
            <div className={`${styles.navbarHeader} fs-6`}>
                <div className={styles.navbarLogo}>
                    <img src={logo} />
                </div>
                <h5>{text}</h5>
            </div>
            <div>
                <div className={`${styles.listContainer} ${dropdownOpen ? styles.open : ''}`}>
                    <ul>
                        {listItems.map((listItem, index) => {
                            return <li className={`${styles.liItem} ${activeTab === index ? styles.liActive : ''} fs-6`} key={index} onClick={() => handleClick(index)}>{listItem}</li>
                        }
                        )}
                    </ul>
                </div>
                <div className={styles.btnToggle} onClick={toggleDropdown}>
                    <img src={toggle} />
                </div>
            </div>

        </div>
    )
}
