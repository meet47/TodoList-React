import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty!");
        }
        else {
            props.addTodo(title, desc);
            setdesc('');
            settitle('');
        }
    }
    return (
        <div className="container">
            <h3 className="mt-3">Add your TODO</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control mb-3" id="title" aria-describedby="emailHelp" placeholder="Todo Title" />
                </div>
                <div className="form-group">
                    <label for="decs">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control mb-3" id="desc" placeholder="Todo Description" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
