import React from 'react'
import './FeaturedProducts.css'
import { useProductContext } from '../../context/product_context';
import Loading from '../Loading';
import Error from '../Error';
import ProductGrid from '../product/ProductGrid';

const FeaturedProducts = () => {
    const { products_loading, products_error, products } = useProductContext();

    if (products_loading) {
        return <Loading />
    }
    if (products_error) {
        return <Error />
    }
    else {
        return (
            <div className='featured-products'>
                <h1>Featured products</h1>
                <div className='featured-products-container'>
                    {
                        products.slice(0, 6).map((item)=>{
                            return <ProductGrid key={item.id} product={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FeaturedProducts
