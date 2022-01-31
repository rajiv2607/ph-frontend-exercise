import React, {useEffect, useRef, useState } from 'react'
import './leftpanel-container.css';
import {useDispatch} from 'react-redux'
import PropTypes from "prop-types";
import * as actions from "../../action/actions"
import { BiChevronDown } from "react-icons/bi";
import { connect } from 'react-redux';
import IconName from '../../utils/IconEnum'
import  HamburgerMenu  from '../../components/hamburger-menu';

export const LeftPanelContainer = ({isExpanded, activeTab , navigation}) => {
    const [lavBarWidth , setLavBarWidth ] = useState();
    // const prevTabName = usePrevious(activeTab);
    const [prev , setprev ] = useState(null);
    // const [currectFocused, setCurrentFocused ] = useState();
    const currectFocused = useRef('');
    let subMenuExpaned = false;
    const dispatch = useDispatch();

    function handleSelectedTab(data) {
      if (prev === data && subMenuExpaned) {
        dispatch(actions.setCurrentActiveTab(null));
      } else {
        dispatch(actions.setExpanded(true));
        dispatch(actions.setCurrentActiveTab(data));
      }

      setprev(data);
    }

    function handleDrawer(currentState) {
        dispatch(actions.setExpanded(currentState));
    }

   useEffect(() => {
        setLavBarWidth(((isExpanded) ? '20%' : '5%'))
    },[isExpanded])

    function onFocus(e) {
      console.log('f',e.target.innerText)
    }

    function enterKeyboard(event){
      if (currectFocused.current === event.target.innerText) {
        dispatch(actions.setCurrentActiveTab(''));
      } else {
        let keyword = event.target.innerText
        console.log(event.target.innerText)
        if(event.keyCode === 13 && event.target.innerText) {
          dispatch(actions.setCurrentActiveTab(event.target.innerText));
        }
        currectFocused.current = keyword
      }
    }

  useEffect(() => {
      document.addEventListener("keydown", enterKeyboard, false);
},[])

    return (
        <section className={`leftpanel-container${(isExpanded) ? '_active' : ''}`}>
            <HamburgerMenu
            handleDrawer={handleDrawer}
            currentState={isExpanded}
            />
            <nav
              style= {{ width: lavBarWidth}}
              className='leftnav'
              data-testid='leftnav'
              role="tablist"
              aria-label="List of Tabs"
            >

                <ul>
                   {
                      navigation && navigation.map((tabs, index) => {
                          let hasSubVerticals = (tabs.children) ? tabs.children : [];
                          let icon = tabs.icon
                        return (
                            <React.Fragment>
                            <div
                            onFocus={onFocus}
                            id={tabs.id}
                            data-testid='nav_list'
                            tabIndex={index}
                            key={tabs.id}
                            className='options'
                            onClick={() => handleSelectedTab(tabs.title)}>
                            <span className={(activeTab === tabs.title) ? 'currentActivetab' : ''}></span>{IconName[icon]}
                            {isExpanded && <><li aria-label={tabs.title}>{tabs.title} </li>
                            { <BiChevronDown className={`icon${((activeTab === tabs.title) )? '_active' : ''}`}/>}
                            </>}
                            </div>
                            {isExpanded && (activeTab === tabs.title) ?
                              tabs.children.map((child) => {
                                subMenuExpaned = true
                                  return (
                                        <ol
                                        data-testid='subNav_list'
                                        key={child.id}><a className='tabLink' href={child.url}>{child.title}</a>
                                    </ol>
                                  )
                              })
                            : ''}
                            </React.Fragment>
                            )
                        })
                   }
                </ul>
            </nav>
        </section>
    )
}


LeftPanelContainer.propTypes = {
  activeTab : PropTypes.bool,
  navigation : PropTypes.array,
  isExpanded: PropTypes.bool
}


const mapStateToProps = state => {
    return {
      isExpanded: state.isExpanded,
      activeTab: state.activeTab
    };
  };

export default connect(mapStateToProps)(LeftPanelContainer)

