import React from 'react'
import Chart from '../../components/chart/Chart'
import "./product.css"
import { productData } from "../../dummyData"
import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className='product'>
            <div className="product-edit-details">
                <h3 className='product-page-title'>Product</h3>
                <Link to="/newproduct">
                    <button className='product-create-btn'>Create</button>
                </Link>
            </div>

            <div className='product-info-container'>
                <div className='product-page-left'>
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className='product-page-right'>
                    <div className='product-page-product'>
                        <img className='product-page-img' src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span>Apple Airpods</span>
                    </div>
                    <div className='product-right-info'>
                        <div className='product-right-flex'>
                            <span>id:</span>
                            <span>123</span>
                        </div>
                        <div className='product-right-flex'>
                            <span>sales:</span>
                            <span>5123</span>
                        </div>
                        <div className='product-right-flex'>
                            <span>active:</span>
                            <span>yes</span>
                        </div>
                        <div className='product-right-flex'>
                            <span>in stock:</span>
                            <span>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-page-bottom'>
                <form className='product-page-form'>
                    <div className='product-form-input-container'>
                        <label>Product Name</label>
                        <input placeholder='Apple AirPod' type="text" />
                    </div>
                    <div className='product-form-input-container'>
                        <label>In Stock</label>
                        <select>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                    <div className='product-form-input-container'>
                        <label>Active</label>
                        <select>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                </form>
                <div className='product-upload-container'>
                    <img className='product-upload-img' src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <Publish cursor="pointer" />
                </div>
                <button className='product-page-update-btn'>Update</button>
            </div>
        </div>
    )
}

export default Product