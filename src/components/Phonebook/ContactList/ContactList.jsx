import PropTypes from 'prop-types';
import { List } from './contactList.styled.js';

const ContactList = ({ removeContact, items }) => {
  const contact = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ol>{contact}</ol>;
};

export default ContactList;

ContactList.defaultProps = {
  items: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};
