import React, {FC} from "react";
import { ClimaCiudad } from "../models/weatherapp";

interface TablaCiudadesProps {
    ubicaciones: ClimaCiudad[];
    actual: ClimaCiudad | null;
    onSelect: (ubicacion: ClimaCiudad)=>void;
}

export const TablaCiudades: FC<TablaCiudadesProps> = ({ubicaciones, onSelect, actual}) =>
<div>
    <h2>Ciudades</h2>
      <table>
      <thead>
      <tr>
        <th>Nombres</th>
      </tr>
      </thead>

      <tbody>
      {ubicaciones.map(ubicacion =>
      <tr className={actual?.id === ubicacion.id? 'table-primary':''}
      onClick={()=> onSelect(ubicacion)}><td>{ubicacion.name}</td>
      </tr>  
      )}
      </tbody>
    
    </table>
      
      
    </div> ;