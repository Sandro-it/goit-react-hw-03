import { useState, useEffect } from "react";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import ContactForm from "../contactForm/ContactForm";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchTerm} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
