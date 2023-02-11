import PropTypes from 'prop-types';
import { BlockFilter } from './contactFilter.js';

const Filter = ({ handleChange }) => {
  return (
    <BlockFilter>
      <label>Find contact by name</label>
      <input onChange={handleChange} placeholder="Filter name" name="filter" />
    </BlockFilter>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func,
};
