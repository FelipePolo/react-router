import React, { useState } from "react";
import ReactDom from "react-dom";
import { v4 as v4uuid } from "uuid";
import Table from "./components/UserTable";
import Adduser from "./components/adduser";
import Edit from "./components/edituserform"
import "./main.css";

function Index() {
  const UserData = [];

  const [users, setusers] = useState(UserData);

  const adduser = (user) => {
    user.id = v4uuid();
    setusers([...users, user]);
  };
  const deleteuser = (userobject) => {
    setusers(users.filter(x => x.id !== userobject.id))   
  };
  //editing user
  const [edit,setedit] = useState(false)
  const [curuser,setcuruser] = useState({id:null,name:'',username:''})

  const editrow = (user) =>{
    setedit(true)
    setcuruser(user)
  }
  const applychange = (id, updateuser) =>{
     setusers(users.map(user => user.id === id ? updateuser : user))
     setedit(false)
  }

  return (
    <div className="container">
      <h1>CRUD APP WITH HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ADD USER</h2>
          {
            edit? <Edit user = {curuser} applychange = {applychange}></Edit> : <Adduser adduser={adduser}></Adduser>
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Table users={users} deleteuser={deleteuser} editrow = {editrow} ></Table>
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<Index></Index>, document.getElementById("root"));
