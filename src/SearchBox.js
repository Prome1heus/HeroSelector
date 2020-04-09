import React from 'react';
import tachyons from 'tachyons'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search for your hero'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;