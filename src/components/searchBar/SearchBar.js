import React, { useState } from 'react'
import "./SearchBar.css"
import { FaTimes } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'
import SearchResultItem from './SearchResultItem'
import Loading from "../Loading"
import Error from "../Error"

const SearchBar = () => {
  
  const { search_result, search_result_loading, search_result_error, showSearchBar, closeSearchBar, fetchSearchResults }= useProductContext();
  const [searchQuery, setSearchQuery]= useState('');
  const [searchDone, setSearchDone]= useState(false);

  const handleClick=()=>{
    setSearchQuery('');
    setSearchDone(true);
    fetchSearchResults(searchQuery);
  };
  const handleClose= ()=>{
    setSearchDone(false);
    closeSearchBar();
  };

  return (
    <div className={showSearchBar?'search-bar active-search-bar':'search-bar'}>
      <div className="search-bar-bg" onClick={handleClose}></div>
      <div className="search-bar-content">
        <div className="search-bar-heading">
          <h2>Search our site</h2>
          <span><FaTimes onClick={handleClose} /></span>
        </div>
        <form onSubmit={(e)=> e.preventDefault()}>
          <input type="text" placeholder='Search...' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
          <button type='submit' onClick={handleClick}><AiOutlineSearch/></button>
        </form>
        <div className="search-results">
          {
            search_result_loading && <Loading/>
          }
          {
            search_result_error && <Error/>
          }
          {
            search_result.length>0?
            search_result.map((item)=>{
              return <SearchResultItem key={item.id} product={item}/>
            }):
            <h3 className='search-bar-msg'>
              {
                searchDone ? 'No results found' : 'Your search results will appear here'
              }
            </h3>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchBar
