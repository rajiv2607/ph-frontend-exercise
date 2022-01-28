import {getFirstTab, getFirstTabSubMenuLength, getNumberOfTabs} from './misc'
import navigation from '../../__mock__/navigation.json'

describe('testing test uiils methods',()=> {
    test('getFirstTab method test' , () => {
        const response = getFirstTab(navigation);
        expect(response).toBe('Reporting')
        const badResponse = getFirstTab({});
        expect(badResponse).toBe('Error in the format of data passed')
    })
    test('getFirstTabSubMenuLength method test', () => {
        const response = getFirstTabSubMenuLength(navigation);
        expect(response).toBe(7)
        const badResponse = getFirstTab({});
        expect(badResponse).toBe('Error in the format of data passed')
    })

    test('getNumberOfTabs method test', () => {
        const response = getNumberOfTabs(navigation);
        expect(response).toBe(10)
        const badResponse = getNumberOfTabs({});
        expect(badResponse).toBe('Error in the format of data passed')
    })
})
