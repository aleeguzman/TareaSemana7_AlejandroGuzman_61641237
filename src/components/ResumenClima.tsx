import { FC, useEffect, useState } from "react";
import { GetClima } from "../apiConexion/conexionApi";
import { Clima, ClimaCiudad } from "../models/weatherapp";
import { DatosClima } from "./DatosClima";

interface PropsResumenClima {
    ubicacion: ClimaCiudad  | null;
  }
  
  export const ResumenClima: FC<PropsResumenClima> = ({ubicacion}) => {
    const [clima, setClima] = useState<Clima | null>(null);
    const [forecast, setForecast] = useState<Clima[] | null>(null);
  
    useEffect(() => {
      (async function () {
        if (ubicacion) {
            GetClima(ubicacion.id).then(clima => setClima(clima));
        }
      })()
    }, [ubicacion]);
  
    if (!ubicacion || !clima || !forecast) return null;
  
    return (
      <div>
        <hr/>
        <h2>{ubicacion.name}</h2>
        <DatosClima clima={clima}/>
  
        <h2>Forecast</h2>
        <div>
          <ol style={({whiteSpace: 'nowrap'})}>
            {forecast.map(timePoint =>
              <li key={timePoint.dt}>
                <DatosClima clima={timePoint}/>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  };