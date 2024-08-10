import React from "react";

const Userdata = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, problem, name, time, important, track } = curUser;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{problem}</td>
            <td>{time}</td>
            <td>{important}</td>
            <td>{track}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Userdata;
