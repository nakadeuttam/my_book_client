import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/noteContext';
import './Noteitem.css';
const Noteitem = (props) => {
  const Context = useContext(noteContext)
  const {deleteNote} = Context;
  const {note} = props;

  const deleteNotePermission =() => {
    const check = window.confirm('Are you sure you want to delete');
    if(check===true)   //if user allow to delete it will delete
    {
      deleteNote(note._id);
    }
  }
  return (
    
    <div className="col-md-6 my-4">
<div className="card border-warning note_card" >
  <div className="card-header d-flex justify-content-between">
    <div>{props.title}</div>
  <div>
  <button type="button" style={{border: 'none', background:'transperent'}} onClick={()=>{props.viewNote(note)}} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa-solid fa-eye"></i></button>
  <i className="fa-solid fa-trash-can mx-2" onClick = {deleteNotePermission}></i>
  <i className="fa-regular fa-pen-to-square mx-2 " onClick={()=>{props.updateNote(note)}}></i>
  </div>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text" style={{height:'50px', overflow:'hidden'}}>{props.description}</p>
  </div>
</div>
</div>
  )
}

export default Noteitem
