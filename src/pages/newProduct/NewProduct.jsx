import React from 'react'
import "./newProduct.css"
const NewProduct = () => {
    return (
        <div className='newproduct'>
            <h3 className='newproduct-title'>New Product</h3>
            <form className='newproduct-form'>
                <div className='newproduct-input-container'>
                    <label>Image</label>
                    <input type="file" placeholder='Choose File'/>
                </div>
                <div className='newproduct-input-container'>
                    <label>Name</label>
                    <input type="text" placeholder='Apple Airpods'/>
                </div>
                <div className='newproduct-input-container'>
                    <label>Stock</label>
                    <input type="text" placeholder='123'/>
                    
                </div>
                <div className='newproduct-input-container'>
                    <label>Active</label>
                    <select>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <button>Create</button>
            </form>

        </div>
    )
}

export default NewProduct