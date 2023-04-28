import React from 'react'
import "./View.css"
import { useProductContext } from '../../context/product_context'
import ProductList from '../product/ProductList';

const ListView = () => {
    const { products }= useProductContext();
  return (
    <div className='list-view'>
      {
        products.map((product)=>{
            return <ProductList key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default ListView
