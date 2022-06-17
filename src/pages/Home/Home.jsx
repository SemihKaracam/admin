import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart grid title="User Analytics" dataKey="Active User" data={userData}/>
      <div className="widget-container">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home