import React from 'react'
import { connect } from 'react-redux'
import  LeftPanelContainer  from './LeftPanelContainer'
import RightPanelContainer from './RightPanelContainer'
import  './dashboard-container.css';
import navigation from '../assets/navigation.json'

export const DashboardContainer = (props) => {
    return (
        <div className='dashboard-container'>
            <LeftPanelContainer navigation={navigation}/>
            <RightPanelContainer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
