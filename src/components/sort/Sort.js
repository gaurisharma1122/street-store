import React, { useState } from 'react'
import './Sort.css'
import { BsFillGridFill, BsList } from "react-icons/bs"
import { useFilterContext } from '../../context/filter_context'

const Sort = () => {
  const { sort_by, gridView, showGridView, showListView, updateSort } = useFilterContext();
  return (
    <div className='sort'>
      <div className="sort-btns">
        <span onClick={showGridView} style={ gridView ? { backgroundColor: '#000', color: '#fff' } : undefined }>
          <BsFillGridFill />
        </span>
        <span onClick={showListView} style={ gridView ? undefined : { backgroundColor: '#000', color: '#fff' } }>
          <BsList />
        </span>
      </div>
      <div className="sort-by">
        <form>
          <label>Sort By:</label>
          <select name="" onChange={(e) => updateSort(e.target.value)}>
            <option value="price-lowest">Price Lowest</option>
            <option value="price-highest">Price Highest</option>
            <option value="name-a">Name A-Z</option>
            <option value="name-z">Name Z-A</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort
