import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = (props) => {
  return (
    <div>
      <SearchBar history={ props.history } />
    </div>
  );
};

export default HomePage;
