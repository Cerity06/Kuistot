import React from 'react'
import styles from '../styles/Home.module.css'

const Article = ({article}) => {
    return (
        <div key={article.id}>
            <h2>{article.title}</h2>
            <p><strong>{article.synopsys}</strong></p>
            <p>{article.body}</p>
        </div>
    )
}

export default Article
