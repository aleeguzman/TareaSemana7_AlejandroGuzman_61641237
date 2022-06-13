import React, {FC, useState} from "react";

interface PropsBuscarUbicacion {
    onSearch: (search: string) => void;
  }

  export const BuscarUbicacion: FC<PropsBuscarUbicacion> = ({onSearch}) => 
  {
    const [ubicacion, setUbicacion] = useState('');
    //const [setUbicacion] = useState('');
    const disableSearch = ubicacion.trim() === '';
 
    const addUbicacion = () => {
    onSearch(ubicacion);
    setUbicacion('');
  };

  return (
    <div>
        <label>
          Buscar Ciudad
          <input className="ml-1 mr-1" type="text" value={ubicacion}
                 onChange={e => setUbicacion(e.target.value)}/>
        </label>
        <button className="btn btn-primary"
                onClick={addUbicacion} disabled={disableSearch}>Buscar</button>
      </div>
  );
}