import { ISEXPANDED, SHOW_DROP_DOWN } from "../action/actions-constans";

let initialState = {
    isExpanded: false,
    showDropDown : false
  };

 const reducer = function(state = initialState, action) {
    switch(action.type) {
        case ISEXPANDED : {
            return {
                ...{state, ...{ isExpanded : action.payload}}
            }
        }

        case SHOW_DROP_DOWN : {
            return {
                ...{state, ...{showDropDown : action.payload}}
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}
export default reducer;