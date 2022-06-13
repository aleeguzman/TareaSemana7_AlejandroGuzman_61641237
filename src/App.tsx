import React, {FC, useState} from 'react';
import './Styles.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { BuscarUbicacion } from './components/buscarUbicaciones';
import { TablaCiudades } from './components/tablaCiudades';
import { ClimaCiudad } from './models/weatherapp';
import {SearchUbicacion} from './apiConexion/conexionApi';
import { ResumenClima } from './components/ResumenClima';


const App: FC = () => {
  const [UicacionActual, setubicacionActual] = useState<ClimaCiudad | null>(null);
  const [ubicaciones, setUbicaciones] = useState<ClimaCiudad[]>([]);
  const [err, setErr] = useState('');
  const [warn, setWarn] = useState('');

  
  const ErrorSet = () =>
  {
    setErr('');
    setWarn('');
  }

  let addUbicacion = async (term: string) =>
  {
    ErrorSet();
    const ubicacion = await SearchUbicacion(term);

    if(!ubicacion)
    {
      setErr(`No se encuentra la ciudad '${term}' `);
    }
    else if (ubicaciones.find(item => item.id === ubicacion.id)) 
    {
    setWarn(`La ciuda '${term}' ya se busco recientenmente, esta en la lista`);
    } 
    else 
    {
    setUbicaciones([ubicacion, ...ubicaciones]);
    }
  };
  
  return (
    <div className="container">
      <h1>AG-API-WEATHER</h1>
      

      <BuscarUbicacion onSearch={addUbicacion}/>
      {
        err
          ? <div className={`alert alert-danger`}>{err}</div>
          : null
      }
      {
        warn
          ? <div className={`alert alert-warning`}>{warn}</div>
          : null
      }


      <TablaCiudades ubicaciones={ubicaciones}
      actual={UicacionActual}
      onSelect={ubicacion=> setubicacionActual(ubicacion)}/>
      

      <ResumenClima ubicacion = {UicacionActual}/>

    </div>
  );
}

export default App;
