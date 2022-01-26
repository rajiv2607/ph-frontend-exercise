import {render as rtlRender} from '@testing-library/react'
import { Provider } from 'react-redux';
import  rootReducer from '../../reducer/rootReducer'
import { createStore } from 'redux';

// const initialState = {
//     isExpanded: false,
//     showDropDown : false,
//     activeTab : null
// }

function renderWithRedux(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {},
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }
    return {
        ...rtlRender(ui, {
            wrapper: Wrapper,
            ...renderOptions,
        }),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}
  export default renderWithRedux

