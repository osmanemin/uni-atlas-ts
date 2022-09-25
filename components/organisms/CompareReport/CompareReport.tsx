import React from 'react'

import styles from './compareReport.module.scss'

type CompareReportProps = {
    children: JSX.Element[]
}

export default function CompareReport({children}: CompareReportProps): JSX.Element {
    return (
        <>
            {children}
        </>
    )
}
