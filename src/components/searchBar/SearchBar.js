import React, { useState } from 'react'
import "./SearchBar.css"
import { FaTimes } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'
import SearchResultItem from './SearchResultItem'



const SearchBar = () => {
  const { search_result, search_result_loading, search_result_error, showSearchBar, closeSearchBar, fetchSearchResults }= useProductContext();
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
        <div className="search-results">
          {
            search_result.length>0?
            search_result.map((item)=>{
              return <SearchResultItem key={item.id} product={item}/>
            }):
            <h3></h3>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchBar
