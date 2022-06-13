import { ClimaCiudad, Clima } from "../models/weatherapp";

const keyQuery = '32edef7d4f4d59d2ad3081f286912976';
const server = 'api.openweathermap.org/data/2.5/';


export async function SearchUbicacion(term: string): Promise<ClimaCiudad | undefined> {
    const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);
  
    if (result.status === 404) return undefined;
    if (result.status !== 200) throw new Error('Error al leer informacion de la API');
  
    return await result.json();
  }

  export async function GetClima(ubicacionID: number): Promise<Clima> {
    const current = await fetch(`${server}/weather?id=${ubicacionID}&${keyQuery}&units=metric`);
  
    if (current.status !== 200) throw new Error('Error al leer informacion de la API');
  
    return await current.json();
  }

  export async function getForecast(ubicacionID: number): Promise<Clima[]> {
    const forecast = await fetch(`${server}/forecast?id=${ubicacionID}&${keyQuery}&units=metric&cnt=8`);
  
    if (forecast.status !== 200) throw new Error('Error al leer informacion de la API');
  
    return (await forecast.json()).list;
  }

  export function GetId(code: string): string {
    return `http://openweathermap.org/img/wn/${code}.png`;
  }

