import React from 'react'
import List from '../../components/project/List'
import styles from './Container.css'
import classNames from 'classnames'



const projects = [
    {
    _id:1,
    title:"Take out the Trash",
    body: "Remember, to take out the Blah form blahburrmouth.",
    steps:
    [
        {text: "Put on blah and blah blah", completed:false},
        {text: "Walk to upstairs kitchen", completed:false},
        {text: "Tie bag and walk to trashcans", completed:false},
        {text: "Place bag into trashcan", completed:false},
        {text: "Walk back to kitchen, put replacement bag inside", completed:false}]
    },
    {
    _id:2,
    title:"Call Phenomonologophosist",
    body: "This is a phony phony test test title",
    steps:
    [
        {text: "Go to Blah.com", completed:false},
        {text: "Search Blah for Phenomonologoophisist appointment and few other types of appointment", completed:false},
        {text: "If Blah blah, blah click that email", completed:false},
        {text: "Blah blah cell phone blah", completed:false},
        {text: "Call blah at Blah o Blah", completed:false},
        {text: "Appoint with Blah on Blah day", completed:false}

    ]}]

  

const Container = () => {

    let containerClasses = classNames({
        'container':true
    })

  return (<div className={containerClasses}><List projects={projects} /></div>);
};

export default Container; 
