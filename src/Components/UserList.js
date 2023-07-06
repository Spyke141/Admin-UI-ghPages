// UserList.js
import React from "react";
import UserListItem from "./UserListItem";
import Pagination from "./Pagination";
import { useState } from "react";
import Actions from "./Actions";

function UserList({
  users,
  isChecked,
  editing,
  editedUsers,
  handleIsChecked,
  handleDeleteUser,
  handleEditUser,
  handleInputChange,
  handleSaveUsers,
}) {
  const pageSize = 15; // Number of users per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page and display in current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedUsers = users.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div
        className="container"
        style={{ height: editing ? '850px' : '650px'}}
      >
        <table className="table">
          <tbody>
            {displayedUsers.map((user, index) => (
              <UserListItem
                key={index}
                user={user}
                index={index}
                isChecked={isChecked[index]}
                editing={editing}
                editedUser={editedUsers[index]}
                handleIsChecked={handleIsChecked}
                handleInputChange={handleInputChange}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Actions
              isChecked={isChecked}
              editing={editing}
              handleDeleteUser={handleDeleteUser}
              handleEditUser={handleEditUser}
              handleSaveUsers={handleSaveUsers}
            />
          </div>
          <div className="col">
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={users.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
