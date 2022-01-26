import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RiAccountCircleLine } from "react-icons/ri";
import  './style.css'
import * as actions from "../../action/actions"
import store from '../../store/store';

export const CommonDropdownContext = ({showDropDown}) => {
  const dispatch = useDispatch();

  const listOfOperations = [
  'Account Settings',
  'User Management',
  'My Team',
  'English(UK)',
  'Logout'
]
   function escFunction(event){
        if(event.keyCode === 27) {
            handleDropDown(false)
        }
      }
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
  },[])

  function handleDropDown(current) {
    dispatch(actions.showAccDropDown(current));
  }
    return (
        <div >
            <RiAccountCircleLine
            onClick={() => handleDropDown(!showDropDown)}
            data-testid='myaccount_icon'
            />
            {showDropDown &&
              <React.Fragment>
                <ul className='drpdwn-container'>
                {listOfOperations.map((operation, index) => {
                  return (
                  <li key={index}
                  data-testid='menus'
                  className='list'>{operation}</li>
                  )
                })
                }
                </ul>
              </React.Fragment>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      showDropDown : state.showDropDown
    };
  }

export default connect(mapStateToProps, null)(CommonDropdownContext)


