import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p>
  Show:
  {" "}
  <FilterLink filter="SHOW_ALL">
  All
  </FilterLink>
  {", "}
  <FilterLink filter="SHOW_JAZZ">
  Jazz
  </FilterLink>
  {", "}
  <FilterLink filter="SHOW_CLASSICAL">
  Classical
  </FilterLink>
  </p>
);

export default Footer;
