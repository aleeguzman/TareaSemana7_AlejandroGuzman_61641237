import React, {FC} from "react";
import { GetId } from "../apiConexion/conexionApi";
import { Clima } from "../models/weatherapp";


interface DatosClimaProps {
    clima: Clima;
}

function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export const DatosClima: FC<DatosClimaProps> = ({clima}) =>
  <div>
    <div>{convertUnixTimeToDate(clima.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{clima.main.temp}°C</strong>
      <div>({clima.main.temp_min}°C / {clima.main.temp_max}°C)</div>
    </div>
    <div>Humedad: {clima.main.humidity}%</div>
    {clima.weather.map(condition =>
      <div key={condition.id}>
        <img src={GetId(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </div>)
    }
  </div>;