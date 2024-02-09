import React from 'react'
import '../style.css'
import { foodMenuApi, drinkMenuApi, cakeMenuApi } from './MenuApi';
import {useDispatch} from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';



function Menu() {

    const dispatch = useDispatch();

    let card_style = {
        "width": "18rem"
    }

    const addCart = (options) => {
        dispatch({
            type:"addToCart",
            payload: options
        })
    }

    return (
        <>
            <Header />

            <div className="menu_content">

                <div className="menu_head">
                    <h1>Order Now Or Reget Later</h1>
                    <div className="all_items">
                        <button><Link to="/food">Foods</Link></button>
                        <button><Link to="/drink">Drinks</Link></button>
                        <button><Link to="/cake">Cakes</Link></button>
                    </div>
                </div>

                <div className="menu_items">
                    {/* MENU FOOD CARD */}
                    <div className="menu_food_cards">

                        {
                            foodMenuApi().map((i) => {
                                return (
                                    <div className="menu_food_items">
                                        <div className="card card_color" style={card_style}>
                                            <img src={i.img} className="card-img-top" alt="food_img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{i.name}  ₹<span>{i.price}</span></h5>
                                                <a className="btn btn-primary" 
                                                onClick={() => {addCart({id: i.id, name: i.name, img: i.img, price: i.price, qty: 1})}}>
                                                    ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* MENU DRINK CARD */}

                    <div className="menu_drink_cards">
                        {
                            drinkMenuApi().map((i) => {
                                return (
                                    <div className="menu_food_items">
                                        <div className="card card_color" style={card_style}>
                                            <img src={i.img} className="card-img-top" alt="food_img" />
                                            <div className="card-body">
                                                <h5 className="card-title">{i.name}  ₹<span>{i.price}</span></h5>
                                                <a className="btn btn-primary" onClick={() => {addCart({id: i.id, name: i.name, img: i.img, price: i.price, qty: 1})}}>ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* MENU CAKE CARD */}
                    <div className="menu_cake_cards">

                        {
                            cakeMenuApi().map((i) => {
                                return (<div className="menu_food_items">
                                    <div className="card card_color" style={card_style}>
                                        <img src={i.img} className="card-img-top" alt="food_img" />
                                        <div className="card-body">
                                            <h5 className="card-title">{i.name}  ₹<span>{i.price}</span></h5>
                                            <a className="btn btn-primary" onClick={() => {addCart({id: i.id, name: i.name, img: i.img, price: i.price, qty: 1})}}>ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }

                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default Menu