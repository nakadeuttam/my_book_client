
import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState =(props)=> {
const host ="https://my-book-backend-i0z0.onrender.com";  //url of backend part

//login state
const[loginToggle,setLoginToggle]=useState('hidden');


//Get Notes

const get_Notes= async()=>{
  try{
  const response = await fetch(`${host}/notes/Your_notes`,{method:"GET",headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
  
  }});      //we used this function in note.js with useeffect that will run for 1st time
  
    const res_json= await response.json();
    console.log(res_json);
    setNote(res_json);
}catch(e){console.log("Unable to fetch")}
}

//Add Note
const addNote = async(title,description)=>{
  try{
 const response= await fetch(`${host}/notes/createNote`,{method: 'POST', headers:{
  'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
 },body:JSON.stringify({title , description})});

 const res_json=await response.json();
 
 console.log(res_json);

setNote(notes.concat(res_json));
  }catch(e){console.log("Unable to fetch")}
}

//Delete Note
const deleteNote = async (id)=>{
  try{
console.log("This note will be delete " + id); 
const response = await fetch(`${host}/notes/deleteNote/${id}`,{method:"DELETE",headers:{
  'Content-Type':'application/json',
  'auth-token':localStorage.getItem('token')
}});
console.log(response);
get_Notes();      //once call get_Notes to fetch updated note from db
  }catch(e){console.log("Unable to fetch")}
}

//Edit Note
const edit_Note =async (id,title,description)=>{
  try{
const response = await fetch(`${host}/notes/updateNote/${id}`,{method:"PUT",headers:{
  "Content-type":"application/json",
  "auth-token":localStorage.getItem('token')},
  body:JSON.stringify({title , description})
});

  const res_json= await response.json();
  console.log(res_json);
  get_Notes();      //once call get_Notes to fetch updated note from db
}catch(err){console.log("Unable to fetch")}
}

  
    const myNote = []
    const [notes,setNote,] = useState(myNote);

    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote,edit_Note,get_Notes,loginToggle,setLoginToggle}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;