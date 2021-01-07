import { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import React from 'react';

const AddItem = () => {
    const [item, setItem] = useState({
        namee: "",
        img: "",
        description: ""
    })

    //add redirect state

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {

    }

    // redirect
    return (
        <>
            <Layout>
                <form>
                    <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="hame" />
                    <input type="text" name="img" value={item.img} onChnage={handleChange} placeholder="image" />
                    <textarea type="text" name="description" value={item.description} onChange={handleChange} placeholder="Product Description" />
                </form>
            </Layout>
        </>
    );
};

export default AddItem;