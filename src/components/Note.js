import React, { useEffect,useRef ,useState} from 'react'
import noteContext from '../context/noteContext';
import { useContext} from 'react';
import Noteitem from './Noteitem';
import { useNavigate } from "react-router-dom";
import './Note.css';
const Note = () => {
  const navigate = useNavigate();
  // const {addNote} = useContext(noteContext);
    const Context = useContext(noteContext)
    const {notes,get_Notes,edit_Note} = Context;
    const [note,setNote] = useState( { id:"" , etitle:"" , edescription:""});
   
   //get the notes once logged in into account
    useEffect(()=>{
      if(localStorage.getItem('token'))
        {
          get_Notes();      //it will call ger_Notes once
        }
        else{
          alert("Do login first");
          navigate("/login");
        }
    },[get_Notes,navigate]);

    const ref=useRef(null);
    const updateNote =(note)=>{
      setNote({id:note._id,etitle:note.title, edescription:note.description});
      ref.current.click();
    }
    const handleclick = (ele) => {
      edit_Note(note.id,note.etitle,note.edescription);
      ele.preventDefault();
  
  
  }
    const onChange = (ele) => {
      setNote({...note,[ele.target.name]:ele.target.value})
  }

    const viewNote = (note) => {
      setNote({id:note._id,etitle:note.title, edescription:note.description});
    }
    

  return (
    <>
        {/* Modal  to view note in large*/}
  <div className="modal fade modal-dialog modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">{note.etitle}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {note.edescription}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>



  {/* model button  referencing through edit icon*/}
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
</button>

{/* modal for edit_Note UI to edit note*/}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="etitle"
          aria-describedby="title"
          onChange={onChange}
          value={note.etitle}
        />
        <div id="emailHelp" className="form-text">
          Title will help you to search Note
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name='edescription'
          onChange={onChange}
          value={note.edescription}
        />
      </div>
      
      {/* <button type="submit" onClick={handleclick} className="btn btn-primary">
        Update
      </button> */}
    </form>
      </div>
      <div className="modal-footer">
      
        <button type="submit" disabled={note.etitle.length < 3 || note.edescription.length < 3} onClick={handleclick} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="container">
      {notes.length === 0 && <h2 className="text-center">No Notes Avilable</h2>}
    <div className='row'>{notes.map((note)=>{
      return <Noteitem title={note.title} description={note.description} key={note._id}  note={note} updateNote={updateNote} viewNote={viewNote}></Noteitem>
    })}</div></div>
    </>
  )
}

export default Note
