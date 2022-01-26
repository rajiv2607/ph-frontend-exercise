// import { render, screen, cleanup } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { CommonDropdownContext } from '../../containers/commondropdown/CommonDropdownContext';
import { Header } from './index';
// import store from '../../store/store'
import renderWithRedux from '../../utils/testUtils/renderWithRedux';
import {screen} from "@testing-library/react";

const { cleanup } = require("@testing-library/react");

 afterEach(cleanup);


test('renders learn react link', () => {
  const { getByText } = renderWithRedux(<Header />)
  const brandName = getByText(/Wayfair/i);
  const brandTitle = getByText(/PARTNER HOME/i);
  expect(brandTitle).toBeInTheDocument()
  expect(brandName).toBeInTheDocument();
});
