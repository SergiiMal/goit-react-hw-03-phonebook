import PropTypes from 'prop-types';
import { Container, Item, Text, Btn } from './ListContacts.styled';

const ListContacts = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          {name}:{number}
        </Text>
        <Btn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Btn>
      </Item>
    ))}
  </Container>
);

export default ListContacts;

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
