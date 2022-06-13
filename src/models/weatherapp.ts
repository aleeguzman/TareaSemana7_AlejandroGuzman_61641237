export interface Coordenadas {
    lon: number;
    lat: number;
}

export interface ClimaCiudad {
    coord: Coordenadas;
    id: number;
    name: string;
  }

  export interface CondicionClima {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface MainClima {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  export interface Clima {
    weather: CondicionClima[];
    main: MainClima;
    dt: number;
  }