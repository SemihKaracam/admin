import React, { useState } from 'react'
import "./productList.css"
import { productRows } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState(productRows)
    const handleDelete = (id) => {
        console.log(products)
        setProducts(products.filter(product => product.id !== id))
    }
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "name",
            headerName: "Product",
            width: 250,
            renderCell: (params) => (
                <div className='product-list-product'>
                    <img className='product-list-img' src={params.row.img} alt="" />
                    <span>{params.row.name}</span>
                </div>
            )
        },
        { field: "stock", headerName: "Stock", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "price", headerName: "Price", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => (
                <div className='product-action'>
                    <Link to={"/product/"+params.row.id}>
                        <button className="product-list-edit-btn">Edit</button>
                    </Link>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className='product-list-delete-btn' />
                </div>
            )
        },

    ]

    return (
        <div className='product-list'>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList