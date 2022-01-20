import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Header } from '../components/header';
import './rightpanel-container.css';


const  RightPanelContainer = (props) => {
    const [currentWidth , setCurrentWidth ] = useState();

    useEffect(() => {
        setCurrentWidth((props.currentState) ? '80%' :'100%')
    },[props.currentState])


    return (
         <div style= {{width: currentWidth }}className='rightpanel-container'>
            <Header/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      currentState: state.isExpanded,
    };
  }

//   const mapDispatchToProps = dispatch => {
//     return {
//       setDropDownState: (current) => {
//         dispatch(actions.showAccDropDown(current));
//       }
//     };
//   };

export default connect(mapStateToProps, null)(RightPanelContainer)
