import { useEffect, useRef, useState } from "react"

import Form from './Form'

export default function AddEmployee({ setEmployees }) {

    const [show, setShow] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
   
        if (show) {
            dialog.showModal();
        } else {
            dialog.close();
        }
        return () => dialog.close();

    }, [show])

    return (
        <div className="add-employee">
            <button onClick={() => setShow(!show)}>
                Add Employee
            </button>
            <dialog ref={dialogRef}>
                <Form 
                    setEmployees={setEmployees} 
                    setShow={setShow}
                />
            </dialog>
        </div>
    )
}