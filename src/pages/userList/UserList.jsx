import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';


const UserList = () => {

    const [users, setUsers] = useState(userRows)
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user',
            headerName: 'User',
            width: 250,
            renderCell: (params) => (
                <div className='userlist-user'>
                    <img className='userlist-img' src={params.row.avatar} alt="" />
                    <span>{params.row.username}</span>
                </div>
            )
        },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Value',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className='userlist-edit-btn'>Edit</button>
                    </Link>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className='userlist-delete-btn' />
                </>
            )
        },

    ];
    return (
        <div className='userlist'>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default UserList