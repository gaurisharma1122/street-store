import React from 'react'
import "./AmountButtons.css"
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"

const AmountButtons = ({ amount, setAmount, stock, setToggleType}) => {

    const handleIncrease = () => {
        if (amount >= stock) {
            setAmount(stock);
        }
        else {
            setAmount(amount + 1);
        }
        if(setToggleType){
            setToggleType('inc');
        }
    };

    const handleDecrease = () => {
        if (amount <= 1) {
            setAmount(1);
        }
        else {
            setAmount(amount - 1);
        } 
        if(setToggleType){
            setToggleType('dec'); 
        }
    };

    return (
        <div className='amount-btns'>
            <AiFillMinusSquare className='amt-btn' onClick={handleDecrease} />
            <p>{amount}</p>
            <AiFillPlusSquare className='amt-btn' onClick={handleIncrease} />
        </div>
    )
}

export default AmountButtons
