import React from 'react'
import styles from './MetricsBar.css'
import classNames from 'classnames'

const MetricsBar = () => {

    let metricsBarClasses = classNames({
        'metrics-bar':true
    })

    return (
        <div className={metricsBarClasses}> 
        <p>Projects: 0, Steps: 10</p>
        </div>
    )
}

export default MetricsBar
