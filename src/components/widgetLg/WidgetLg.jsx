import React from 'react'
import "./widgetLg.css"
const WidgetLg = () => {
  const Button = ({type})=>{
    return <button className={`widget-lg-button ${type}`}>{type}</button>
  }
  return (
    <div className='widget-lg'>
      <h3 className='widget-lg-title'>Latest transactions</h3>
      <table className="widget-lg-table">
        <tr className='widget-lg-tr'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='customer-info'>
            <img className='customer-img' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span>Susan Carol</span>
          </td>
          <td>2 Jun 2021</td>
          <td>$122.00</td>
          <td><Button type="Approved"/></td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='customer-info'>
            <img className='customer-img' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span>Susan Carol</span>
          </td>
          <td>2 Jun 2021</td>
          <td>$122.00</td>
          <td><Button type="Declined"/></td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='customer-info'>
            <img className='customer-img' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span>Susan Carol</span>
          </td>
          <td>2 Jun 2021</td>
          <td>$122.00</td>
          <td><Button type="Pending"/></td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='customer-info'>
            <img className='customer-img' src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span>Susan Carol</span>
          </td>
          <td>2 Jun 2021</td>
          <td>$122.00</td>
          <td><Button type="Pending"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg