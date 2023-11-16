import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/notesContact';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import {useNavigate} from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNote , editNote} = context;
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNote();
        }
        else{
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])
    
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"default"})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
    }

    const handleclick = (e)=>{
        e.preventDefault();
        if(note.etitle.length <3){
            // props.showAlert("Title should be atleast 3 character long ","danger");
            alert("Title should be atleast 3 character long ");
        }
        else if(note.edescription.length <5){
            // props.showAlert("Description should be atleast 5 character long ","danger");
            alert("Description should be atleast 5 character long ");
        }
        else{
            editNote(note.id,note.etitle,note.edescription,note.etag)
            refClose.current.click();
            props.showAlert("Note Updated Successfully!!","success");
        }
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" placeholder="Title should be atleast 3 character long" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" placeholder="Description should be atleast 5 character long" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  type="button" className="btn btn-primary" onClick={handleclick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Previous Notes</h2>
                <div className="container mx-2">
                {notes.length===0 && 'NO!! Notes to Display'}
                </div>
                {notes.map((note,index) => {
                    return <Noteitem showAlert={props.showAlert} key={index} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes