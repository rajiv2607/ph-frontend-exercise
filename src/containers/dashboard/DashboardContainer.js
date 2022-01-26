import React, {useState} from 'react'
import { connect } from 'react-redux'
import  LeftPanelContainer  from '../leftPanelContainer/LeftPanelContainer'
import RightPanelContainer from '../rightPanelContainer/RightPanelContainer'
import  './dashboard-container.css';
import navigation from '../../assets/navigation.json'
import {useFetch} from '../../hooks/useFetch'

 const DashboardContainer = (props) => {

    const URL = 'https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms'
    const  {response, error} = useFetch(URL);

    return (
        <div className='dashboard-container'>
            {
                response && <>
                    <LeftPanelContainer navigation={response}/>
                    <RightPanelContainer/>
                </>
            }
        </div>
    )
}

export default DashboardContainer;
