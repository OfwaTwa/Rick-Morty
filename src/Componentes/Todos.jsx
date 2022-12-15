import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPersonajes } from "../API/ConsumirApi";
import axios from "axios";
import style from "../Style/Todos.module.css";
import Button from "@mui/material/Button";

const ListaPersonajes = (props) => {
  const [state, setState] = useState({ data: [], siguiente: "", anterior: "" });

  useEffect(() => {
    async function buscarDatos() {
      const { results, info } = await getPersonajes();
      setState({ data: results, siguiente: info.next, anterior: info.prev });
    }
    buscarDatos();
  }, []);

  const nextPage = () => {
    if (state.siguiente != null) {
      const next = state.siguiente;
      axios.get(next).then((r) => {
        const { results, info, prev } = r.data;
        setState({ data: results, siguiente: info.next, anterior: info.prev });
      });
      console.log(state);
    } else {
      console.log("error");
    }
  };

  const prevPage = () => {
    if (state.anterior != null) {
      const previus = state.anterior;
      axios.get(previus).then((r) => {
        console.log(previus);
        const { results, info } = r.data;
        setState({ data: results, siguiente: info.next, anterior: info.prev });
      });
      console.log(state.data);
    } else {
      console.log("error");
    }
  };

  return (
    <div className={style.contenedor_principal}>
      <h1 className={style.titulo}>Personajes</h1>
      <div className={style.contenedor_tarjeta}>
        {state.data.map((personas, i) => {
          return (
            <div key={i}>
              <div className={style.card}>
                <div className={`${style.face} ${style.front}`}>
                  <img src={personas.image} alt={personas.name} />
                  <h3>{personas.name}</h3>
                </div>
                <div className={`${style.face} ${style.back}`}>
                  <h3>{personas.name}</h3>
                  <p>
                    Locación: <br/>
                    {personas.location.name} <br/>
                    Genero: 
                    {personas.gender}
                  </p>
                  <p>{personas.state}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.contenedor_botones}>
        <Button
          variant="outlined"
          className={style.boton_siguiente}
          style={{ color: "white", borderColor: "green", background: "green" }}
          onClick={() => {
            prevPage();
          }}
        >
          Anterior
        </Button>
        <Button
          variant="outlined"
          className={style.boton_anterior}
          style={{ color: "white", borderColor: "green", background: "green" }}
          onClick={() => {
            nextPage();
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default ListaPersonajes;
