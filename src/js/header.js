import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/header.css";
import { Context } from "./store/appContext";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import logo from "../img/starWars.png";

export const Header = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Logo" width="100px" />
        </Link>
      </div>
      <div className="favorites">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((fav, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    actions.removeFavorite(store.favorites, fav);
                  }}
                >
                  <a className="dropdown-item" href="#">
                    {fav} - <FaTrashAlt />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
