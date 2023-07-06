import React from "react";

function UserListItem({
  user,
  index,
  isChecked,
  editing,
  editedUser,
  handleIsChecked,
  handleInputChange,
}) {
  // function to generate table rows
  const generateInputField = (name, placeholder, value) => {
    return (
      <input
        type="text"
        className={
          editing && isChecked ? "form-control text-bg-warning" : "form-control"
        }
        placeholder={placeholder}
        name={name}
        onChange={(e) => handleInputChange(e, index, name)}
        value={value}
        readOnly={!editing || !isChecked}
      />
    );
  };

  return (
    // display user data on the table
    <tr>
      <td>
        <input
          type="checkbox"
          className="form-check-label"
          checked={isChecked}
          onChange={(e) => handleIsChecked(e, index)}
        />
      </td>
      <td className="text-center w-25">
        {editing ? (
          generateInputField("name", user.name, editedUser.name)
        ) : (
          user.name
        )}
      </td>
      <td className="text-center w-40">
        {editing ? (
          generateInputField("email", user.email, editedUser.email)
        ) : (
          user.email
        )}
      </td>
      <td className="text-center w-25">
        {editing ? (
          generateInputField("role", user.role, editedUser.role)
        ) : (
          user.role
        )}
      </td>
    </tr>
  );
}

export default UserListItem;
