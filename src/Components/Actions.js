// Actions.js
import React from "react";

function Actions({
  isChecked,
  editing,
  handleDeleteUser,
  handleEditUser,
  handleSaveUsers,
}) {

  // function to generate buttons
  const generateButtons = (btnName, btnClassName, btnOnClick) => {
    return (
      <button
          type="button"
          className= {`btn ${btnClassName} mx-2 my-2 text-center`} 
          onClick={btnOnClick}
          disabled={!isChecked.includes(true)}
        >
          {btnName}
        </button>
    )
  };


  return (
    // Display Edit User conditionally and a Delete Button
    <div className="d-grid gap-2 d-md-block">
      {editing ? (
        generateButtons('Save User', 'btn-warning', handleSaveUsers)
      ) : (
        generateButtons('Edit User', 'btn-primary', handleEditUser)
      )}
      {generateButtons('Delete User', 'btn-danger', handleDeleteUser)}
    </div>
  );
}

export default Actions;
