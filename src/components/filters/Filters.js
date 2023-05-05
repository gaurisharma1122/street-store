import React from 'react'
import "./Filters.css"
import { useProductContext } from '../../context/product_context'
import { useFilterContext } from '../../context/filter_context';

const Filters = () => {
  const { categories } = useProductContext();
  const { updateFilter, filter }= useFilterContext(); 
  return (
    <div className='filters'>
      <h3>Categories</h3>
      <ul>
        <li onClick={()=> updateFilter('all')} style={ filter.category === 'all' ? { color:'var(--link-color-hover)' } : undefined }>All</li>
        {
          categories.map((item, index) => {
            return <li key={index} onClick={()=> updateFilter(item)} style={ filter.category === item ? { color:'var(--link-color-hover)' } : undefined }>{item}</li>
          })
        }
      </ul>

    </div>
  )
}

export default Filters
