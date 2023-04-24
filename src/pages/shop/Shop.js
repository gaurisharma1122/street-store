import React from 'react'
import "./Shop.css"
import PageHero from '../../components/pageHero/PageHero'
import { useProductContext } from '../../context/product_context'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { categoriesData } from '../../data';

const Shop = () => {
  const { categories, categories_loading, categories_error } = useProductContext();

  if (categories_loading) {
    return <Loading />
  }
  if (categories_error) {
    return <Error />
  }
  else {
    return (
      <div className='container'>
        <PageHero pageTitle='Shop' />
        <div className="shop-container">
          {
            categoriesData.map((category) => {
              return (
                <div key={category.id} className='category'>
                  <img src={category.img} alt={category.category} />
                  <div className='category-overlay'>
                    <h3>{category.category}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default Shop
