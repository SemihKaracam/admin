import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const FeaturedInfo = () => {
  return (
    <div className='featured-info'>
        <div className='featured-item'>
            <span className='featured-title'>Revanue</span>
            <div className='money-info'>
                <span>$2,415</span>
                <div className='ratio'>
                    <span>-11.4</span>
                    <ArrowDownward className='arrow'/>
                </div>
            </div>
            <span className='featured-sub'>Compared to last month</span>
        </div>
        <div className='featured-item'>
            <span className='featured-title'>Sales</span>
            <div className='money-info'>
                <span>$4,415</span>
                <div className='ratio'>
                    <span>-1.4</span>
                    <ArrowDownward className='arrow'/>
                </div>
            </div>
            <span className='featured-sub'>Compared to last month</span>
        </div>
        <div className='featured-item'>
            <span className='featured-title'>Cost</span>
            <div className='money-info'>
                <span>$2,225</span>
                <div className='ratio'>
                    <span>+2.4</span>
                    <ArrowUpward className='arrow positive'/>
                </div>
            </div>
            <span className='featured-sub' >Compared to last month</span>
        </div>

    </div>
  )
}

export default FeaturedInfo