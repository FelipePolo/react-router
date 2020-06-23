import React from "react";
import {useForm} from 'react-hook-form'

function Adduser({ adduser }) {
  const {handleSubmit,register,errors} = useForm()
  const add = (data,e) =>{
    adduser(data)
    e.target.reset()
  }
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit(add)}>
        <input type="text" name = "name"  placeholder="your name" ref={register({
          required: {
            value: true,
            message:"Este campo es requerido"
          },
        }
        )} />
        <span className = "small bg-aqua">{errors?.name?.message}</span>

        <input type="text" name = "username"  placeholder="your username" ref={register({
          required: {
            value: true,
            message:"Este campo es requerido"
          },
        }
        )} />
        <span className = "small bg-aqua d-block">{errors?.username?.message}</span>
        <button className="btn btn-primary" type = {"submit"}>Register</button>
      </form>
    </div>
  );
}

export default Adduser;
