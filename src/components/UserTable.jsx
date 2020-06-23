import React from "react";
import User from "./user";

function UserTable({users , deleteuser,editrow}) {
  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Username </th>
          <th> User id</th>
          <th> Actions </th>
        </tr>
      </thead>
      <tbody>
        {
        users.length > 0 ?
        users.map((x) => {
          return (
            <User
              user = {x}
              key={x.id}
              deleteuser = {deleteuser}
              editrow = {editrow}
            ></User>
          );
        }) : (<h1>NO USERS</h1>)
      }
      </tbody>
    </table>
  );
}

export default UserTable;
