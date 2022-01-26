import renderWithRedux from '../../utils/testUtils/renderWithRedux'
import {CommonDropdownContext} from "./CommonDropdownContext";
import userEvent from "@testing-library/user-event";
import {cleanup, fireEvent} from "@testing-library/react";

describe('test cases for common drope down' , ()=>{

    afterEach(cleanup)

    test('non rendering', ()=> {
        const { getByTestId } = renderWithRedux(<CommonDropdownContext/>);
        expect(() => getByTestId('dropDown')).toThrow('Unable to find an element');
        expect(getByTestId('myaccount_icon')).toBeInTheDocument();
    })

    test('rendering of showDropDown' , () => {
        const listOfOperations = [
            'Account Settings',
            'User Management',
            'My Team',
            'English(UK)',
            'Logout'
        ]
        const { getByTestId, getAllByTestId } = renderWithRedux(<CommonDropdownContext
            showDropDown={true}
         />);
        userEvent.click(getByTestId('myaccount_icon'))
        let menusItems = getAllByTestId('menus');
        menusItems.forEach((item, index) => {
            expect((item)).toHaveTextContent(listOfOperations[index])
        } )
    })


    test('reducer showDropDown test' , () => {
        const { getByTestId, store } = renderWithRedux(<CommonDropdownContext
         />);
         const { showDropDown } = store.getState();
        expect(showDropDown).not.toBeTruthy();
        userEvent.click(getByTestId('myaccount_icon'))
        expect(store.getState().showDropDown).toBeTruthy();
    })

    test('user ' ,() => {
        const { getByTestId, store } = renderWithRedux(<CommonDropdownContext/>);
        userEvent.click(getByTestId('myaccount_icon'))

        fireEvent.keyDown(getByTestId('myaccount_icon'), {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            charCode: 27
      });
      expect(store.getState().showDropDown).not.toBeTruthy();
    })
})
