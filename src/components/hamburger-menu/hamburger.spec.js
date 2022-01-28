const { HamburgerMenu } = require("..")
import renderer from 'react-test-renderer';


describe('Snap shot test', () => {
    test('testing rendering for Ham component', () => {
        const component = renderer.create(
            <HamburgerMenu/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})
