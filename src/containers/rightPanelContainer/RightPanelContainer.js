import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Header } from '../../components/header';
import './rightpanel-container.css';


const  RightPanelContainer = (props) => {
    const [currentWidth , setCurrentWidth ] = useState();

    useEffect(() => {
        setCurrentWidth((props.currentState) ? '80%' :'100%')
    },[props.currentState])


    return (

         <div className={`rightpanel-container${(currentWidth) ? '_active' : ''}`}>
            <Header/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentState: state.isExpanded,
    };
  }

export default connect(mapStateToProps, null)(RightPanelContainer)
