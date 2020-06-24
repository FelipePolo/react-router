import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Civilizacion() {
  const {id} = useParams()
  useEffect(() => {
    async function fethdata(){
      const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
      const info = await data.json()
      console.log(info)
    }
    fethdata()
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Civilizacion
