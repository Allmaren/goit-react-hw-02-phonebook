import PropTypes from 'prop-types';
import { BlockFilter, Input, Label } from './contactFilter.js';

const Filter = ({ inputValue }) => {
  return (
    <BlockFilter>
      <Label>Find contact by name</Label>
      <Input onChange={inputValue} placeholder="Filter name" name="filter" />
    </BlockFilter>
  );
};

export default Filter;

Filter.propTypes = {
  inputValue: PropTypes.func.isRequired,
};
