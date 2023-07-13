import React, { useState, useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    c1: "",
    c2: "",
    c3: "",
    c4: "",
  });

  const [editFormData, setEditFormData] = useState({
    c1: "",
    c2: "",
    c3: "",
    c4: "",
  });

  //Sessão JSON
  const [matrixData, setMatrixData] = useState([]);

  const [jsonStrings, setJsonStrings] = useState([]);

  // Função para criar a string JSON de uma linha da matriz
  const createJsonString = (rowIndex) => {
    const rowData = matrixData[rowIndex];
    const jsonString = JSON.stringify(rowData);
    return jsonString;
  };

  const createAllJsonStrings = () => {
    const newJsonStrings = matrixData.map((_, index) => createJsonString(index));
    setJsonStrings(newJsonStrings);
  };
  //Sessão JSON

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      c1: addFormData.c1,
      c2: addFormData.c2,
      c3: addFormData.c3,
      c4: addFormData.c4,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      c1: editFormData.c1,
      c2: editFormData.c2,
      c3: editFormData.c3,
      c4: editFormData.c4,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      c1: contact.c1,
      c2: contact.c2,
      c3: contact.c3,
      c4: contact.c4,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="c1"
          //required="required"
          placeholder="Enter component"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="c2"
          //required="required"
          placeholder="Enter component"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="c3"
          //required="required"
          placeholder="Enter component"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="c4"
          //required="required"
          placeholder="Enter component"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={createAllJsonStrings}>Criar JSONs</button>
    </div>
  );
};

export default App;