import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RiAccountCircleLine } from "react-icons/ri";
import  './style.css'
import * as actions from "../../action/actions"

export const CommonDropdownContext = (props) => {

   function escFunction(event){
        if(event.keyCode === 27) {
            props.setDropDownState(false);
        }
      }
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
  },[])
    return (
        <div>
            <RiAccountCircleLine onClick={() => props.setDropDownState(!props.showDropDown)}/>
            {console.log(props.showDropDown)}
            {props.showDropDown && 
                <ul className='drpdwn-constainer'>
                <li className='list'>Account Settings</li> 
                <li className='list'>User Management</li> 
                <li className='list'>My Team</li> 
                <li className='list'>English(UK)</li> 
                <li className='list'>Logout</li> 
                </ul>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      showDropDown : state.showDropDown
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      setDropDownState: (current) => {
        dispatch(actions.showAccDropDown(current));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CommonDropdownContext)


