import React from 'react'
import styles from '../styles/Home.module.css'
import Article from './Article'


const Articles = ({articles}) => {
    return (
        <div className={styles.list_articles}>
            {articles.map(article => (
                <Article article={article} />
            ))}
        </div>
    )
}

export default Articles
