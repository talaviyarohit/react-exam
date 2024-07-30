import React, { useState } from 'react'
import './addContact.css'
/*react icons */
import { IoPersonSharp } from "react-icons/io5";

import ViewData from '../ViewContacts/ViewData';
import { Link } from 'react-router-dom';



function AddProduct() {



    return (
        <>

            <div className="admin-panel">

                <div className="sidebar">
                    <h2>Product</h2>
                    <ul>
                        <Link to={'/Form'}  className='text-decoration-none'>
                            <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><IoPersonSharp /></span>Product</a></li>
                        </Link>
                        
                    </ul>
                </div>


                <div className="content">
                    <ViewData />
                </div>
            </div>
        </>
    )
}

export default AddProduct;