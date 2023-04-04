import PropTypes from 'prop-types';
import { Label, Input } from './FilterContacts.styled';

const FilterContacts = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

export default FilterContacts;

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
//
