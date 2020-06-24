import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Civilizacion() {
  const { id } = useParams();
  const [civi, setcivi] = useState({});
  useEffect(() => {
    async function fethdata() {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      );
      const info = await data.json();
      setcivi(info);
    }
    fethdata();
  }, [id]);

  return (
    <div>
      <h1>{civi.name}</h1>
      <p>{civi.expansion}</p>
      <p>{civi.army_type}</p>
    </div>
  );
}

export default Civilizacion;
