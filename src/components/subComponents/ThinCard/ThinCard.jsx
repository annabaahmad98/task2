import React from 'react';
import styles from './ThinCard.module.css'

export default function ThinCard({ avatar, title, icon, description, style, stars }) {
    return (
        <div className={styles.cardConatiner}>
            <div>
                <img src={avatar} alt="Avatar" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>{title}</span>
            
            {/* Stars Section */}
            <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                {[...Array(stars)].map((_, i) => (
                    <img key={i} src={icon} alt="Star" style={{ width: '20px', height: '20px' }} />
                ))}
            </div>

            <p style={{ marginTop: '15px', textAlign: 'center' }}>{description}</p>
        </div>
    );
}
