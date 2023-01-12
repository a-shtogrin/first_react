import React from 'react';
import './search.css';

export const Search = () => {
  return (
          <form className="menu-bar-search">
          <input
            type="search"
            placeholder="Что вы ищете?"
            className="menu-bar-search-field"
          ></input>
          <img src={'/images/loupe.png'} alt="loupe" />
        </form>
  );
};
