import { ACTIVE_TAB, IS_EXPANDED, SHOW_DROP_DOWN } from "../action/actions-constans";

let initialState = {
    isExpanded: false,
    showDropDown : false,
    activeTab : null
  };

 const rootReducer = function(state = initialState, action) {
    switch(action.type) {
        case IS_EXPANDED :
            return {
                ...{...state, isExpanded: action.payload}
            }

        case SHOW_DROP_DOWN :
            return {
                ...{...state, showDropDown: action.payload}
            }

        case ACTIVE_TAB :
        return {
            ...{...state, activeTab: action.payload}
        }

        default :
            return {
                ...state
            }
    }
}
export default rootReducer;
