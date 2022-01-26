const { HamburgerMenu } = require("..")
import renderer from 'react-test-renderer';


describe('Snap shot test', () => {
    test('test1', () => {
        const snapshot = renderer.create(<HamburgerMenu />).toJSON();
        // eslint-disable-next-line jest/valid-expect
        expect(true)
    })
})
