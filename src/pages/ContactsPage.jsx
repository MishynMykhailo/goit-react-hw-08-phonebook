const { ContactForm } = require('components/ContactForm');
const { default: ContactList } = require('components/ContactList');
const { default: Filter } = require('components/Filter');

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
