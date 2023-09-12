import './Movies.css'
import { Link, Outlet } from 'react-router-dom';



export default function Movies() {
    
    return (
        <>
       
            <div>
                <button className='btn btn-danger mt-3 mx-2'><Link className='text-decoration-none text-dark fw-bold' to="add">Add</Link></button>
                <button className='btn btn-danger mt-3 mx-2'><Link className='text-decoration-none text-dark fw-bold' to="edit">Edit</Link></button>
            </div>

            <Outlet />
        </>
    )
}