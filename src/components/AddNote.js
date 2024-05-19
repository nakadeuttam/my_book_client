import React, {useContext,useState} from 'react'
import noteContext from '../context/noteContext'

const AddNote = () => {

    const [note,setNote] = useState( {title:"" , description:""});
    const {addNote} = useContext(noteContext);
    const handleclick = (ele) => {
        ele.preventDefault();
        addNote(note.title,note.description);
        setNote({title:"" , description:""})
    }

    const onChange = (ele) => {
        setNote({...note,[ele.target.name]:ele.target.value})
    }



  return (
    <div className="container my-4">
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Add Title for your Note
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          aria-describedby="title"
          onChange={onChange}
          value={note.title}
        />
        <div id="emailHelp" className="form-text">
          Title will help you to search Note
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Add Description to your Note
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name='description'
          onChange={onChange}
          value={note.description}
        />
      </div>
      
      <button type="submit" disabled={note.title.length < 3 || note.description.length < 3} onClick={handleclick} className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default AddNote
