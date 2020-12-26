import React from 'react'
import CartItems from './CartItems';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CartItems 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall
                        deep inside the Amazon Jungle'
                        label = 'Adventure' path = '/services'
                        />
                        <CartItems 
                        src='images/img-2.jpg'
                        text='Travel through the Islands of bali in a private Cruise'
                        label = 'Luxury' path = '/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CartItems 
                        src='images/img-5.jpg'
                        text='Explore the hidden waterfall
                        deep inside the Amazon Jungle'
                        label = 'Adventure' path = '/services'
                        />
                        <CartItems 
                        src='images/img-6.jpg'
                        text='Travel through the Islands of bali in a private Cruise'
                        label = 'Luxury' path = '/services'
                        />
                        <CartItems 
                        src='images/img-7.jpg'
                        text='Travel through the Islands of bali in a private Cruise'
                        label = 'Luxury' path = '/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
