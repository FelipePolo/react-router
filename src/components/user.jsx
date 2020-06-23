import React from "react";

function User(props) {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.username}</td>
      <td>{props.user.id}</td>
      <td>
        <button
          className={`button muted-button`}
          onClick={() => {
            props.editrow(props.user)
          }}
        >
          Edit
        </button>
        <button
          className="button muted-button"
          onClick={() => props.deleteuser(props.user)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default User;
