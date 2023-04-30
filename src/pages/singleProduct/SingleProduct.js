import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useParams } from "react-router-dom";
import { useProductContext } from '../../context/product_context';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PageHero from '../../components/pageHero/PageHero';
import AmountButtons from '../../components/amountButtons/AmountButtons';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useCartContext } from '../../context/cart_context';

const SingleProduct = () => {
    const { id }= useParams();
    const { single_product, single_product_loading, single_product_error, fetchSingleProduct }= useProductContext();
    const { wishlist, addToWishlist, removeFromWishlist, addToCart }= useCartContext();
    const [amount, setAmount]= useState(1);
    const [mainImgIndex, setMainImgIndex]= useState(0);
   

    useEffect(()=>{
        fetchSingleProduct(id);
    }, []);

    if(single_product_loading){
        return <Loading/>
    }
    if(single_product_error){
        return <Error/>
    }
    else{
        return (
            <div className='container'>
                <PageHero pageTitle="Products" product={single_product.title}/>
                <div className="single-product">
                    <div className="img-container">
                        <img src={single_product.images? single_product.images[mainImgIndex]: ''} alt={single_product.title} />
                        <div className="img-btns">
                            {
                                single_product.images?.length > 1 &&
                                single_product.images?.map((img, index)=>{
                                    return <img key={index} src={img} alt="image" onClick={()=>setMainImgIndex(index)} className={index===mainImgIndex && 'main-img'}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="single-product-info">
                            <h2>{single_product.title}</h2>
                            <h3>By: {single_product.brand}</h3>
                            <p>Category: {single_product.category}</p>
                            <h2 className='price'>$ {single_product.price}</h2>
                            <p>{single_product.description}</p>
                            <h4>Rating: {single_product.rating}</h4>
                            <AmountButtons amount={amount} setAmount={setAmount} stock={single_product.stock}/>
                            <div className="single-product-info-btns">
                                {
                                    single_product.stock>0?
                                    <button onClick={()=> addToCart(single_product.id, single_product, amount)}>Add to cart</button>:
                                    <button>out of stock</button>
                                }
                                
                                {
                                    wishlist.some((item)=> item.id === single_product.id)?
                                    <button onClick={()=> removeFromWishlist(single_product.id)}><AiFillHeart/></button>:
                                    <button onClick={()=> addToWishlist(single_product)}><AiOutlineHeart/></button>
                                }
                            </div>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default SingleProduct
