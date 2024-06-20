import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";

import { selectContacts } from "../../redux/contactsSlice";
import { selectName } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const getName = useSelector(selectName);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(getName.toLowerCase())
  );
  return (
    <>
      {visibleContacts.map((item) => {
        return (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
          />
        );
      })}
    </>
  );
};

export default ContactList;
