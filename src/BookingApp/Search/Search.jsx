import React from 'react';
import SearchBar from './SearchBar';
import './Search.css';
import SearchItems from './SearchItems';
import TopNav from '../TopNav';

function Search(props) {
    return (
        <div>
            <TopNav/>
            <div className="SearchingPortion">
          <SearchBar/>
         <SearchItems/>
          </div>
        </div>
    );
}

export default Search;