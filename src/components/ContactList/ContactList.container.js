import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
