import React from 'react'
import "./View.css"
import { useProductContext } from '../../context/product_context'
import ProductGrid from '../product/ProductGrid';

const GridView = () => {
    const { products } = useProductContext();
    return (
        <div className='grid-view'>
            {
                products.map((product)=>{
                    return <ProductGrid key={product.id} { ...product } />
                })
            }
        </div>
    )
}

export default GridView
