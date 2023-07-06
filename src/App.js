// App.js
import React, { useState, useEffect } from "react";
import FetchUser from "./Components/FetchUser.js";
import HomePage from "./Components/HomePage";

function App() {
  const [users, setUsers] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUsers, setEditedUsers] = useState([]);

  // Fetch user data on component mount
  useEffect(() => {
    FetchUser({ setUsers, setIsChecked });
  }, []);

  // Filter user data based on search query
  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, [users, searchQuery]);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Handle delete user button functionality
  const handleDeleteUser = () => {
    if (window.confirm("Selected users will be deleted")) {
      const updatedUsers = users.filter((user, index) => !isChecked[index]);
      setUsers(updatedUsers);
      setIsChecked((prevCheckState) =>
        prevCheckState.filter((item, index) => !isChecked[index])
      );
    }
  };

  // For handling inputs when user clicks edit button
  const handleInputChange = (e, index, field) => {
    const updatedData = [...editedUsers];
    updatedData[index][field] = e.target.value;
    setEditedUsers(updatedData);
  };

  // edit user functionality to enable edit button if a single user is checked.
  const handleEditUser = () => {
    if (isChecked.includes(true)) {
      setEditing(!editing);
      if (editing) {
        setEditedUsers([]);
      } else {
        setEditedUsers([...users]);
      }
    }
  };

  // Handle toggle state of individual checkbox for table rows
  const handleIsChecked = (e, index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = e.target.checked;
    setIsChecked(updatedIsChecked);
  };

  // handle toggle state of master checkbox
  const handleCheckboxAll = () => {
    setIsChecked(prevState => {
      const allChecked = !prevState.every(checked => checked);
      return prevState.map(() => allChecked);
    });
  };

  // saving users after editing is done
  const handleSaveUsers = () => {
    setUsers([...editedUsers]);
    setEditing(false);
  };

  return (
    <>
      <HomePage
        users={filteredUsers}
        isChecked={isChecked}
        handleSearch={handleSearch}
        handleIsChecked={handleIsChecked}
        handleDeleteUser={handleDeleteUser}
        editing={editing}
        editedUsers={editedUsers}
        handleEditUser={handleEditUser}
        handleInputChange={handleInputChange}
        handleCheckboxAll={handleCheckboxAll}
        handleSaveUsers={handleSaveUsers}
      />
    </>
  );
}

export default App;
