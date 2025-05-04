import styles from './MemberCard.module.css'

export default function MemberCard({ avatar, memberName, btnIcon, title, description }) {
    return (
        <div className='card-main-layout'>
            <div className={styles.cardHeader}>
                <div className={styles.avatarInfo}>
                    <div className={styles.avatar}>
                        <img src={avatar} />
                    </div>
                    <h3 className='fw-bold'>{memberName}</h3>
                </div>
                <button className={styles.btnIcon}>
                    <img src={btnIcon} />
                </button>
            </div>
            <div className={styles.cardContent}>
                <p className='fs-6 fw-bold'>{title}</p>
                <p className='fs-7'>{description}</p>
            </div>
        </div>
    )
}
