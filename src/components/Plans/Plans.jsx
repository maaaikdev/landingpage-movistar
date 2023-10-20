import React, { useState, useEffect } from 'react';
import './Plans.scss'
import PlanCards from '../PlansCards/PlansCards';

const Plans = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Realiza una solicitud para obtener el JSON
        fetch('/data/plans.json') // Ruta relativa al archivo JSON
          .then((response) => {
            if (!response.ok) {
              throw new Error('No se pudo cargar el JSON');
            }
            return response.json();
          })
          .then((jsonData) => {
            setData(jsonData);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

  return (
    <div className='content-plans'>
        {/* {data ? <PlanCards plan={data} /> : (
            <p>Cargando JSON...</p>
        )} */}
		    {data && data.map((item, index) => (
            <PlanCards key={index} plan={item} /> 
        ))}
    </div>
  );
};

export default Plans;