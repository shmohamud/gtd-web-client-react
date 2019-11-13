import React from 'react'
import useProjects from '../../hooks/useProjects'

const Detail = (props) => {
    const {project} = props
    const {selectProject} = useProjects()

    return (
        
         <div onClick={selectProject}>
         Project Title: {project.title} <br></br>
         Project Description: {project.body}
         </div>
        
    )
}

export default Detail