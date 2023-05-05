import React from 'react'
import "./View.css"
import { useProductContext } from '../../context/product_context'
import ProductList from '../product/ProductList';
import { useFilterContext } from '../../context/filter_context';

const ListView = () => {
    const { filtered_products }= useFilterContext();
  return (
    <div className='list-view'>
      {
        filtered_products.map((product)=>{
            return <ProductList key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default ListView
