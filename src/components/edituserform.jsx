import React from 'react'
import {useForm} from 'react-hook-form'

function Edituserform({user,applychange}) {
  const {handleSubmit,register,errors,setValue} = useForm({defaultValues:user})
  setValue('username',user.username)
  setValue('name',user.name)
  
  const update = (data,e) =>{
    data.id = user.id
    applychange(user.id,data)
    e.target.reset()
  }

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit(update)}>
        <input type="text" name = "name"  placeholder="edit name" ref={register({
          required: {
            value: true,
            message:"Este campo es requerido"
          },
        }
        )}
        />
        <span className = "small bg-aqua">{errors?.name?.message}</span>

        <input type="text" name = "username"  placeholder="edit username" ref={register({
          required: {
            value: true,
            message:"Este campo es requerido"
          },
        }
        )}
        />
        <span className = "small bg-aqua d-block">{errors?.username?.message}</span>
        <button className="btn btn-primary" type = {"submit"}>Edit Users</button>
      </form>
    </div>
  )
}

export default Edituserform
