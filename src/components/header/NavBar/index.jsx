import React from 'react'
import classNames from 'classnames'
import styles from './NavBar.css'
const NavBar = () => {

    let navClasses = classNames({
        'navbar':true
    })

    return (
        <div className={navClasses}>
            <a> All Projects </a>
            <a> New Project</a>
        </div>
    )
}

export default NavBar
