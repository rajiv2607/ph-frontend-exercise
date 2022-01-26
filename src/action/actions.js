import  { ACTIVE_TAB, IS_EXPANDED, SHOW_DROP_DOWN } from './actions-constans'

export function setExpanded(currentState) {
    return {
        type : IS_EXPANDED,
        payload : currentState
    }
}


export function showAccDropDown(state){
    return {
        type : SHOW_DROP_DOWN,
        payload : state
    }
}

export function setCurrentActiveTab(tabName) {
    return {
        type : ACTIVE_TAB,
        payload : tabName
    }
}