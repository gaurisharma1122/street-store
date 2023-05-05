import React from 'react'
import Loading from '../../components/Loading'
import { useProductContext } from '../../context/product_context'
import Error from '../../components/Error';
import PageHero from '../../components/pageHero/PageHero';
import Filters from '../../components/filters/Filters';
import Sort from '../../components/sort/Sort';
import './Products.css'
import GridView from '../../components/view/GridView';
import ListView from '../../components/view/ListView';
import { useFilterContext } from '../../context/filter_context';

const Products = () => {
  const { products_loading, products_error, products } = useProductContext();
  const { gridView }= useFilterContext()

  if (products_loading) {
    return <Loading />
  }
  if (products_error) {
    return <Error />
  }
  else {
    return (
      <div className='container'>
        <PageHero pageTitle='Products' />
        <div className="products-wrapper">
          <Filters />
          <div>
            <Sort />
            <div className="products-container">
              {
                gridView? <GridView/> : <ListView/>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Products
