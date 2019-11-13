import React from 'react'
import styles from './Header.css'
import classNames from 'classnames'
import MetricsBar from './MetricsBar'
import NavBar from './NavBar'

const Header = () => {

    let headerClasses = classNames({
        'header':true
    })

    return (
        <div className={headerClasses}>
            <MetricsBar/>
            <NavBar/>
        </div>
    )
}

export default Header
