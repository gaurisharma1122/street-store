import React, { useState } from 'react'
import "./SearchBar.css"
import { FaTimes } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'



const SearchBar = () => {
  const { showSearchBar, closeSearchBar, fetchSearchResults }= useProductContext();
  const [searchQuery, setSearchQuery]= useState('');

  const handleClick=()=>{
    setSearchQuery('');
    fetchSearchResults(searchQuery);
  };

  return (
    <div className={showSearchBar?'search-bar active-search-bar':'search-bar'}>
      <div className="search-bar-bg" onClick={closeSearchBar}></div>
      <div className="search-bar-content">
        <div className="search-bar-heading">
          <h2>Search our site</h2>
          <span><FaTimes onClick={closeSearchBar} /></span>
        </div>
        <form onSubmit={(e)=> e.preventDefault()}>
          <input type="text" placeholder='Search...' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
          <button type='submit' onClick={handleClick}><AiOutlineSearch/></button>
        </form>
        <h2>{searchQuery}</h2>
      </div>
    </div>
  )
}

export default SearchBar
