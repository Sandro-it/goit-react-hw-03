import css from "./Contact.module.css";
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.ContactItem}>
      <p className={css.contactName}>
        {" "}
        <TiUser />
        {name}
      </p>
      <p className={css.contactName}>
        <TiPhone />
        {number}
      </p>
      <button className={css.contactDeleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
