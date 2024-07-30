import React, { useEffect, useState } from 'react'
import './form.css'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AddContactAsync, uploadImages } from '../../Services/Actions/contactsActions'
function Form() {
    const navigate = useNavigate()
    const dispacth = useDispatch()


    const [isSubmit, setIsSubmit] = useState(false)
    const [userContact, setUerContact] = useState({
        avatar: '',
        Name: '',
        Price: '',
        category :''
    })

    const HandleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUerContact({ ...userContact, [name]: value })
    }



    const handleImages = async (e) => {
        const file = e.target.files[0];
        // setIsSubmit(true)
        try {
            const url = await dispacth(uploadImages(file));
            setUerContact(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setIsSubmit(false)
    };

    const HandleSubmit = (e) => {
        e.preventDefault(),
            dispacth(AddContactAsync(userContact))
        navigate('/')
    }

    useEffect(() => {
        if (isSubmit) {
            navigate('/')
        }
    }, [isSubmit])
    return (
        <>
            <div className="createform">
                <Container>
                    <Row className='justify-content-center '>
                        <div className="col-4">
                            <form class="form " onSubmit={HandleSubmit}>
                                <p class="title">Add New Product </p>


                                <label>
                                    <span>Product Picture</span>
                                    <input class="input" type="file" name='avatar' onChange={handleImages} required="" />
                                </label>


                                <label>
                                    <input class="input" type="text" placeholder="" name='Name' value={userContact.Name} onChange={HandleInput} required="" />
                                    <span>Product Name</span>
                                </label>


                                <label>
                                    <input class="input" type="number" placeholder="" name='Price' value={userContact.Price} onChange={HandleInput} required="" />
                                    <span>Product Price</span>
                                </label>

                                <label>
                                    <input class="input" type="text" placeholder="" name='category' value={userContact.category} onChange={HandleInput} required="" />
                                    <span> category</span>
                                </label>
                                
                                <button class="submit">Submit</button>

                            </form>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Form;
