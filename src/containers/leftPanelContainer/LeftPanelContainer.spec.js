
import { LeftPanelContainer } from './LeftPanelContainer';
import navigation from "../../__mock__/navigation.json";
import userEvent from "@testing-library/user-event";
import renderWithRedux from '../../utils/testUtils/renderWithRedux';
import {getFirstTab, getFirstTabSubMenuLength, getNumberOfTabs} from '../../utils/testUtils/misc'
import {cleanup, fireEvent, within} from "@testing-library/react";
const MENU_ICON = 'hamburger_icon';
const LIST_ITEMS = 'nav_list'
const LEFT_MENU = 'leftnav';
const SUB_MENUS = 'subNav_list'

afterEach(cleanup)

describe ('test cases for left panel rendering with redux', () => {
    test('[Rendering] - test hamburger is present in the DOM' ,()=> {
        const { getByTestId } = renderWithRedux(<LeftPanelContainer navigation={navigation} />);
        expect(getByTestId(MENU_ICON)).toBeInTheDocument();
    });

    test('Side drawer data is not displayed on intial rendering', ()=>{
        const initialState = {
            isExpanded: false
        }
        const { getByTestId } = renderWithRedux(<LeftPanelContainer navigation={null} />, initialState);
        expect(() => getByTestId(LIST_ITEMS)).toThrow('Unable to find an element');
    })

    test ('Side drawer is displayed when we click on icon', () => {
        const numberOfTabs = getNumberOfTabs(navigation);
        const initialState = {
            isExpanded: true
        }
        const { getAllByTestId } = renderWithRedux(<LeftPanelContainer navigation={navigation} />, initialState);
        expect(getAllByTestId(LIST_ITEMS)).toHaveLength(numberOfTabs);
    })

    test('[User interaction] - When user click on ham , side drawer expands', () => {
        const numberOfTabs = getNumberOfTabs(navigation);
        const { getAllByTestId, getByTestId } = renderWithRedux(
            <LeftPanelContainer
            navigation={navigation} />);
        userEvent.click(getByTestId(MENU_ICON));
        expect(getAllByTestId(LIST_ITEMS)).toHaveLength(numberOfTabs)
    })

    test('[User interaction], sub menu displayed', async () => {
        const firstNavName = getFirstTab(navigation);
        const fistNavChildLength = getFirstTabSubMenuLength(navigation);
        const { getByTestId } = renderWithRedux(<LeftPanelContainer
            activeTab={"Reporting"}
            currentState= {true}
            isExpanded ={true}
            navigation={navigation} />);
        const leftNav = getByTestId(LEFT_MENU);
        const firstNav = within(leftNav).getByText(firstNavName);
        fireEvent.click(firstNav);
        expect(within(leftNav).getAllByTestId(SUB_MENUS)).toHaveLength(fistNavChildLength)
    })

    test('[Reducer test]' , () => {
        const { store, getAllByTestId } = renderWithRedux(<LeftPanelContainer
            navigation={navigation} />);
        const firstNav = getAllByTestId(LIST_ITEMS)[0]
        const {isExpanded} = store.getState();
        expect(isExpanded).not.toBeTruthy();
        fireEvent.click(firstNav);
        expect(store.getState().isExpanded).toBeTruthy();
    })
})
