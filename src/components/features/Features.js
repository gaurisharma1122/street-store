import React from 'react'
import { features } from '../../data'
import './Features.css'

const Features = () => {
    
    return (
        <div className='features'>
            <div className='features-container'>
                {
                    features.map((item) => {
                        return (
                            <div key={item.id} className='feature-item'>
                                <span>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Features
