import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          //required="required"
          placeholder="comp"
          name="c1"
          value={editFormData.c1}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          //required="required"
          placeholder="comp"
          name="c2"
          value={editFormData.c2}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          //required="required"
          placeholder="comp"
          name="c3"
          value={editFormData.c3}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          //required="required"
          placeholder="Enter an email..."
          name="c4"
          value={editFormData.c4}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;