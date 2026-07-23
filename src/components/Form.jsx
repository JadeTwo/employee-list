import { useState } from "react"

import { randomPhoto, generateId } from "../utils/helper";

export default function Form({ setEmployees }) {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            id: generateId(),
            headshot: randomPhoto(),
            name: name,
            title: title,
            email: null,
            phone: null
        };

        setEmployees((prevEmployees) => [newEmployee, ...prevEmployees]);

        console.log(newEmployee);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>

            <label htmlFor="name">Name</label>

            <input 
                type="text" id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <button>Submit</button>
        </form>
    )
}