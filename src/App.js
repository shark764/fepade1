import React from 'react';
import Toolbar from './containers/Toolbar';
import List from './containers/List';
import SearchProvider from './context/SearchContext';

function App() {
  return (
    <div>
      <SearchProvider>
        <Toolbar />
        <List />
      </SearchProvider>
    </div>
  );
}

export default App;
