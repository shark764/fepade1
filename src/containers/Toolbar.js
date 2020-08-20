import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function Toolbar() {
  const [search, setSearch] = useContext(SearchContext);

  console.log('Render');

  return (
    <div>
      <span>Itca Fepade 2020</span>

      <input
        type="text"
        name=""
        id=""
        placeholder="Search..."
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <span>{search}</span>
    </div>
  );
}

export default Toolbar;
