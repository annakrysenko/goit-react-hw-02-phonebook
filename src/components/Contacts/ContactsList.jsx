// import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const ContactsList = ({ showFilteredContacts, OnClickDelete, title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {showFilteredContacts.length ? (
          showFilteredContacts.map(contact => (
            <li key={contact.id} className={styles.item}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => OnClickDelete(contact.id)}
                className={styles.delete}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>There are no contacts here</p>
        )}
      </ul>
    </>
  );
};

export default ContactsList;
