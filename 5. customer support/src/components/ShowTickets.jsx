// src/TaskTable.js
import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";

const API = "https://dummyjson.com/c/fecb-8ec5-4ee8-9928";

// Define styled components for the table

const ShowTickets = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <table border= "1px solid ">
      <thead>
        <tr>

        <th>id</th>
        <th>Name </th>
        <th>Problem </th>
        <th>Time </th>
        <th>Important</th>
        <th>Track</th>
        </tr>
      </thead>
      <tbody>
        <Userdata users={users} />
      </tbody>
    </table>
  );
};

export default ShowTickets;
