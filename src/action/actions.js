import  { ISEXPANDED, SHOW_DROP_DOWN } from './actions-constans'

export function setExpanded(currentState) {
    return {
        type : ISEXPANDED,
        payload : currentState
    }
}


export function showAccDropDown(state){
    return {
        type : SHOW_DROP_DOWN,
        payload : state
    }
}