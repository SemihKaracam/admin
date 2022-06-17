import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, Tooltip,  ResponsiveContainer, CartesianGrid } from 'recharts';



const Chart = ({data,title,dataKey,grid}) => {
    return (
        <div className='chart'>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid strokeDasharray="5 5"/>}
                    <XAxis dataKey="name" />
                    <Line type="monotone" dataKey={dataKey}/>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart