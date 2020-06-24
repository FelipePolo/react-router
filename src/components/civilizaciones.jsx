import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Civilizaciones() {

  const [civi,setcivi] = useState([])

  useEffect(() => {

    async function fethdata(){
      const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
      const info = await data.json()
      setcivi(info.civilizations)
    }
    fethdata()
  },[])

  return (
    <ul>
      {
        civi.length >0 ? (
          civi.map((x) => {
            return (
              <Link key = {x.id} to = {`/Civilizaciones/${x.id}`} className = "d-block"> {x.name} - {x.expansion} </Link>
            )
          })
        ): <span> Cargando...</span>
      }

    </ul>
  )
}

export default Civilizaciones
