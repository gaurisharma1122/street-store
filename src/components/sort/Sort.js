import React from 'react'
import './Sort.css'
import { BsFillGridFill, BsList } from "react-icons/bs"

const Sort = () => {
  return (
    <div className='sort'>
      <div className="sort-btns">
        <span><BsFillGridFill/></span>
        <span><BsList/></span>
      </div>
      <div className="sort-by">
        <form>
            <label>Sort By:</label>
            <select name="" id="">
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
