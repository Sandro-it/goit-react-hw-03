import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contactsList}>
      {contacts.map((contact) => (
        <div className={css.contactsItem} key={nanoid()}>
          <Contact id={contact.id} contact={contact} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
