/*import React, { useState } from "react";
import {nanoid} from "nanoid";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id1: '',
    id2: '',
    id3: '',
    id4: '',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const contato = event.target.getAttribute('name');
    const tipoContato = event.target.value;

    const newFormData = {...addFormData};
    newFormData[contato] = tipoContato;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newContact = {
      id0: nanoid(),
      id1: addFormData.id0,
      id2: addFormData.id1,
      id3: addFormData.id2,
      id4:addFormData.id3,
    };
    const newContacts = [...contacts, setContacts];
    setContacts(newContacts);
  }

  return <div>className = "app-container"
    <table>
      <thead>
        <th>ID</th>
        <th>Address</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Final</th>
      </thead>
      <tbody>
        {contacts.map((contacts) => (
          <tr>
          <td>{contacts.id0}</td>
          <td>{contacts.id1}</td>
          <td>{contacts.id2}</td>
          <td>{contacts.id3}</td>
          <td>{contacts.id4}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Add a Contact</h2>
    <form>
    <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
      <button type="submit">Add</button>
    </form>
  </div>
};

export default App;*/
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);

  const handleEdit = (event, id, field) => {
    const newValue = event.target.value;

    setContacts((prevContacts) =>
      prevContacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, [field]: newValue };
        }
        return contact;
      })
    );
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      address: "",
      phoneNumber: "",
      email: "",
    };
    setContacts([...contacts, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                <input
                  type="text"
                  value={contact.address}
                  onChange={(event) =>
                    handleEdit(event, contact.id, "address")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={contact.phoneNumber}
                  onChange={(event) =>
                    handleEdit(event, contact.id, "phoneNumber")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={contact.email}
                  onChange={(event) =>
                    handleEdit(event, contact.id, "email")
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="address"
          required
          placeholder="Enter an addres..."
        />
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter a phone number..."
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;