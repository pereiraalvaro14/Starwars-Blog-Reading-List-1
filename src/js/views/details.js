import React, { useEffect, useContext } from "react";
import "../../styles/details.css";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.loadDetails(params.type, params.id);
  }, []);

  return (
    <div className="detailsContainer">
      <div className="top">
        <div className="description">
          <b> {store.detail.properties.name} </b> - {store.detail.description}
        </div>
      </div>
      <div className="bottom">
        {params.type == "people" && (
          <>
            <div>
              height: <p>{store.detail.properties.height}</p>
            </div>
            <div>
              mass: <p>{store.detail.properties.mass}</p>
            </div>
            <div>
              hair color: <p>{store.detail.properties.hair_color}</p>
            </div>
            <div>
              skin color: <p>{store.detail.properties.skin_color}</p>
            </div>
            <div>
              eye color: <p>{store.detail.properties.eye_color}</p>
            </div>
            <div>
              bith year:<p> {store.detail.properties.birth_year}</p>
            </div>
            <div>
              gender:<p> {store.detail.properties.gender}</p>
            </div>
          </>
        )}
        {params.type == "planets" && (
          <>
            <div>
              diameter: <p>{store.detail.properties.diameter}</p>
            </div>
            <div>
              rotation_period: <p>{store.detail.properties.rotation_period}</p>
            </div>
            <div>
              orbital_period: <p>{store.detail.properties.orbital_period}</p>
            </div>
            <div>
              gravity: <p>{store.detail.properties.gravity}</p>
            </div>
            <div>
              population: <p>{store.detail.properties.population}</p>
            </div>
            <div>
              climate: <p>{store.detail.properties.climate}</p>
            </div>
          </>
        )}
        {params.type == "starships" && (
          <>
            <div>
              model: <p>{store.detail.properties.model} </p>
            </div>
            <div>
              starship_class: <p> {store.detail.properties.starship_class}</p>
            </div>
            <div>
              manufacturer: <p>{store.detail.properties.manufacturer}</p>
            </div>
            <div>
              cost_in_credits: <p>{store.detail.properties.cost_in_credits}</p>
            </div>
            <div>
              length: <p>{store.detail.properties.length}</p>
            </div>
            <div>
              crew: <p>{store.detail.properties.crew}</p>
            </div>
            <div>
              passengers: <p>{store.detail.properties.passengers}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
