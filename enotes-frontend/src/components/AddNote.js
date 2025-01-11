import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/notesContact';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleclick = (e)=>{
        e.preventDefault();
        if(note.description.length <5){
            props.showAlert("Description should be atleast 5 character long ","danger");
        }
        else{
            addNote(note.title, note.description, note.tag);
            setNote({title:"",description:"",tag:""});
            props.showAlert("Note Added Successfully!!","success");
        }
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
        <div className='mt-2'>
            <h2 className='my-2'>Add New Note</h2>
            <form onSubmit={handleclick}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Title should be atleast 3 character long" id="title" name="title" value={note.title} onChange={onChange} minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" placeholder="Description should be atleast 5 character long" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                <button  type="submit" className="btn btn-primary">Add Note</button>
            </form>
        </div>
        </>
        
    )
}

export default AddNote