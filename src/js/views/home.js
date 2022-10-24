import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import imgCard from "../../img/img-card.webp";
import { Context } from "../store/appContext";

export const Home = () => {
  // const [personajes, modificarPersonajes] = useState([]);
  // const [planetas, modificarPlanetas] = useState([]);
  // const [vehiculos, modificarVehiculos] = useState([]);
  const [cargando, modificarCargando] = useState(true);
  const { store, actions } = useContext(Context)

  

  // const obtenerPersonas = async () => {
  //   const res = await fetch("https://www.swapi.tech/api/people/");
  //   const data = await res.json();
  //   console.log({ data });
  //   modificarPersonajes(data.results);
  // }

  // const obtenerPlanetas = async () => {
  //   const res = await fetch("https://www.swapi.tech/api/planets/");
  //   const data = await res.json();
  //   console.log({ data });
  //   modificarPlanetas(data.results);
  // }

  // const obtenerVehiculos = async () => {
  //   const res = await fetch("https://www.swapi.tech/api/vehicles/");
  //   const data = await res.json();
  //   console.log({ data });
  //   modificarVehiculos(data.results);
  // }

  useEffect(async () => {
    actions.obtenerPersonas()
    actions.obtenerPlanetas()
    actions.obtenerVehiculos()
    modificarCargando(false);
  },[])

  if (cargando) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-5">
      <h2>PEOPLES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.personajes.map((personaje) => {
          return (
            <div className="col" key={personaje.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{personaje.name}</h5>
                  <p className="card-text">{personaje.gender}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/personaje/${personaje.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(personaje.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>PLANETS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.planetas.map((planeta) => {
          return (
            <div className="col" key={planeta.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{planeta.name}</h5>
                  <p className="card-text">{planeta.terrain}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/planeta/${planeta.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(planeta.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>VEHICLES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.vehiculos.map((vehiculo) => {
          return (
            <div className="col" key={vehiculo.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{vehiculo.name}</h5>
                  <p className="card-text">{vehiculo.model}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/vehiculo/${vehiculo.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(vehiculo.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
