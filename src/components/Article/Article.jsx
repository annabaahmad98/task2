import styles from './Article.module.css'

export default function Article({ articleTitle, width, height, bgArticle, articleDescription }) {
    return (
        <div className={`${styles.articleContainer} card-main-layout`}>
            <div className={styles.bgContainer} style={{ width: width, height: height }}>
                <img src={bgArticle} />
            </div>
            <div className={`${styles.articleInfo} px-3 w-sm-100`}>
                <button className={`${styles.articleBtn} fs-8`}>Overview</button>
                <h1 className={`${styles.articleHeader} fw-bold`}>{articleTitle}</h1>
            </div>
            <div className={`${styles.articleInfo} px-3 w-sm-100`}>
                <p className='fs-7'>{articleDescription}</p>
            </div>
        </div>
    )
}
