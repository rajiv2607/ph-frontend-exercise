import React, {useEffect, useState } from 'react'
import './leftpanel-container.css';
import { GiHamburgerMenu } from "react-icons/gi";
import * as actions from "../action/actions"
import { connect } from 'react-redux';
// import {usePrevious} from '../hooks/';
import IconName from '../utils/IconEnum'
export const LeftPanelContainer = (props) => {
    const [currentWidth , setCurrentWidth ] = useState();
    const [lavBarWidth , setLavBarWidth ] = useState();
    const [currentSelectedTab, setCurrentSelectedTab ] = useState();


    function handleSelectedTab(data) {
        if (!props.currentState) {
            props.setCurrentState(true) 
        }
        if (currentSelectedTab) {
            setCurrentSelectedTab((prev) => {
                if(prev === data) {
                    setCurrentSelectedTab('');
                }
            });
        } else {
            setCurrentSelectedTab(data);
        }
    }

   useEffect(() => {
        setCurrentWidth((props.currentState) ? '20%' : '5.4%')
        setLavBarWidth(((props.currentState) ? '20%' : '5%'))
    },[props.currentState])

    return (
        <div style = {{ width : currentWidth }} className='leftpanel-container'>
            <GiHamburgerMenu onClick={()=> props.setCurrentState(!props.currentState)} className='hamburger_icon' />
            <div style= {{ width: lavBarWidth}} className='leftnav'>
                <ul>
                   {
                      props.navigation.map((tabs) => {
                          let icon = tabs.icon
                        return (<div keuy={tabs.id} className='options' onClick={()=> handleSelectedTab(tabs.title)}>
                            {(currentSelectedTab === tabs.title)? <span>|</span> : ''} 
                             {IconName[icon]}
                            {props.currentState && <li>{tabs.title}
                            {(currentSelectedTab === tabs.title) ? 
                              tabs.children.map((child) => {
                                  return (
                                      <div key={child.id} className='sub-options'>
                                        <ol>{child.title}</ol>
                                      </div>
                                  )
                              })
                            
                            
                            : ''}
                            </li>}
                            
                        </div>
                            )
                        })
                       
                   }
                </ul>
            </div>
        </div>
    )
}




const mapStateToProps = state => {
    return {
      currentState: state.isExpanded
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      setCurrentState: (currentState) => {
        dispatch(actions.setExpanded(currentState));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelContainer)

