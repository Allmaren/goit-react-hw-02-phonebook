import PropTypes from 'prop-types';
import { BlockFilter, Input, Label } from './contactFilter.js';

const Filter = ({ handleChange }) => {
  return (
    <BlockFilter>
      <Label>Find contact by name</Label>
      <Input onChange={handleChange} placeholder="Filter name" name="filter" />
    </BlockFilter>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func,
};
