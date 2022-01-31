import { Header } from './index';
import renderWithRedux from '../../utils/testUtils/renderWithRedux';

const { cleanup } = require("@testing-library/react");

 afterEach(cleanup);


test('renders learn react link', () => {
  const { getByText } = renderWithRedux(<Header />)
  const brandName = getByText(/Wayfair/i);
  const brandTitle = getByText(/PARTNER HOME/i);
  expect(brandTitle).toBeInTheDocument()
  expect(brandName).toBeInTheDocument();
});
