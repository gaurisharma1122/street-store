import React from 'react'
import "./View.css"
import ProductGrid from '../product/ProductGrid';
import { useFilterContext } from '../../context/filter_context';

const GridView = () => {
    const { filtered_products } = useFilterContext();
    return (
        <div className='grid-view'>
            {
                filtered_products.map((product)=>{
                    return <ProductGrid key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default GridView
