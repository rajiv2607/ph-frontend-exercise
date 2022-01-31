import  '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

// src/setupTests.js
import { server } from '../../mocks/server';
import DashboardContainer from "./DashboardContainer";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());


describe ('test using mock', () => {
    test('mocking api and snapshot test ' , () => {
        const component = renderer.create(
            <DashboardContainer/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})
