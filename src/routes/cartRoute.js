import React from "react";
import { cartPath } from '../helpers/routes';
import Cart from "../components/Cart";

export default {
  name: 'Cart',
  exact: true,
  strict: true,
  path: cartPath(),
  render: () => <Cart />
};