import React from 'react'

import styles from './scrollBottom.module.scss'


export default function ScrollBottom(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.mouse}>
                <div className={styles.scroll}></div>
            </div>
        </div>
    )
}
