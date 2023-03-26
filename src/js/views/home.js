import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaHeart } from "react-icons/fa";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  function classNames(...args) {
    return args.filter(Boolean).join(" ");
  }

  function isInFavorites(name) {
    return store.favorites.includes(name);
  }

  return (
    <div>
      <section>
        <h2> Characters </h2>

        {store.people.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ width: "18rem", float: "left" }}
            >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>

                <Link to={"/details/people/" + item.uid}>
                  <button className="btn btn-primary">Details</button>
                </Link>
                <button
                  className={classNames(
                    "btn btn-primary",
                    isInFavorites(item.name) && "active"
                  )}
                  onClick={() =>
                    actions.setFavorite(store.favorites, item.name)
                  }
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <h2> Planets </h2>
        {store.planets.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ width: "18rem", float: "left" }}
            >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={"/details/planets/" + item.uid}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <h2> Starships </h2>
        {store.starships.map((item, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ width: "18rem", float: "left" }}
            >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={"/details/starships/" + item.uid}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
