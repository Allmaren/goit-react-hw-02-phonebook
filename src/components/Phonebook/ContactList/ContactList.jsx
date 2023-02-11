import PropTypes from 'prop-types';
import { List, Button } from './contactList.styled.js';

const ContactList = ({ removeContact, items }) => {
  const contact = items.map(({ id, name, number }) => (
    <List key={id}>
      {name}: {number}
      <Button onClick={() => removeContact(id)} type="button">
        Delete
      </Button>
    </List>
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
