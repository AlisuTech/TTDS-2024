import React from 'react';
import {useParams} from 'react-router-dom'
import '../styles/home.css'
import { getProducts } from '../repository/products';

const HomePage = () => {
    const {profile_name}=useParams()
    return (
        <div className='home-background'>
            <div>
                <h1>
                    Welcome to MyApp, 
                    {profile_name}
                </h1>
                <div className='container-div'>
                    {
                        getProducts().filter(x=>x.type==="popular").map(item => (
                        <div>
                            <img className='img-size' alt="product tag" src={item.src}/>
                            <h4>{item.name}</h4>
                            <p>{item.amount} {item.currency}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
} 
export default HomePage;