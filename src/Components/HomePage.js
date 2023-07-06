// HomePage.js
import React from "react";
import UserList from "./UserList";
import noUserImg from "../Resources/No User.gif";

function HomePage({
  users,
  isChecked,
  editing,
  editedUsers,
  handleSearch,
  handleIsChecked,
  handleDeleteUser,
  handleEditUser,
  handleInputChange,
  handleCheckboxAll,
  handleSaveUsers,
}) {
  // Homepage Fixed layout
  return (
    <div className="container">
      <h2 className="text-center">ADMIN UI</h2>
      <div className="input-group mb-4 my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Click here to search for Employees"
          aria-label="Employee SearchBar"
          aria-describedby="basic-addon2"
          onChange={handleSearch}
        />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                checked={isChecked.every((checked) => checked)}
                onChange={handleCheckboxAll}
              />
            </th>
            <th className="text-center w-25">Name</th>
            <th className="text-center w-40">Email</th>
            <th className="text-center w-25">Role</th>
          </tr>
        </tbody>
      </table>
      {/* homepage variable layout */}
      {users.length === 0 ? (
        <div className="container text-center my-5">
        <h4 style={{ color : '#CC5500'}}>User not found in Database</h4>
        <img src={noUserImg} alt={noUserImg} height="100px" width="100px" />
        </div>
      ) : (
        <UserList
          users={users}
          isChecked={isChecked}
          editing={editing}
          editedUsers={editedUsers}
          handleIsChecked={handleIsChecked}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
          handleInputChange={handleInputChange}
          handleSaveUsers={handleSaveUsers}
        />
      )}
    </div>
  );
}

export default HomePage;
