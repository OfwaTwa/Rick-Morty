import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPersonajes } from "../Api/Api";
import axios from "axios";
import style from "../Style/Todos.module.css";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const CharactersList = () => {
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
      <div className={style.contenedor_card}>
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
                  <b>
                    {personas.status === "Alive" ? (
                      <span className={style.status}>
                        <span
                          className={style.status_icono}
                          style={{ background: "green" }}
                        />
                        {personas.status} - {personas.species}
                      </span>
                    ) : null}

                    {personas.status === "Dead" ? (
                      <span className={style.status}>
                        <span
                          className={style.status_icono}
                          style={{ background: "red" }}
                        />
                        {personas.status} - {personas.species}
                      </span>
                    ) : null}

                    {personas.status === "unknown" ? (
                      <span className={style.status}>
                        <span
                          className={style.status_icono}
                          style={{ background: "gray" }}
                        />
                        {personas.status} - {personas.species}
                      </span>
                    ) : null}
                  </b>
                  <p>
                    Genero: {personas.gender}{" "}
                    {personas.gender === "Male" ? (
                      <MaleIcon fontSize="small" color="primary" />
                    ) : null}
                    {personas.gender === "Female" ? (
                      <FemaleIcon fontSize="small" color="primary" />
                    ) : null}
                  </p>
                  <p>
                    Ubicación actual: <br /> {personas.location.name}
                  </p>
                  <p>
                    Lugar de origen: <br /> {personas.origin.name}
                  </p>
                  <div className={style.fecha_creacion}>
                    <p>
                      Fecha de creación: <br />
                      {personas.created}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <KeyboardArrowLeftIcon
        className={style.boton_izquierdo}
        sx={{ fontSize: 60 }}
        style={{ color: "white" }}
        onClick={() => {
          prevPage();
        }}
      />

      <KeyboardArrowRightIcon
        className={style.boton_derecho}
        sx={{ fontSize: 60 }}
        style={{ color: "white" }}
        onClick={() => {
          nextPage();
        }}
      />
    </div>
  );
};

export default CharactersList;
