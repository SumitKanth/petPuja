import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { CakeApi } from "./CakeApi";
import { useDispatch } from "react-redux";
import '../style.css';

const Cake = () => {

    const dispatch = useDispatch();

    let card_style = {
        "width": "18rem",
        "margin": "3rem 3rem"
    }

    const addCart = (option) => {
        dispatch({
            type: "addToCart",
            payload: option
        })
    }

    return (
        <>
            <Header />

            <div className="food_items">
                {
                    CakeApi.map((i) => {
                        return (
                            <div class="card card_color" style={card_style}>
                            <img src={i.img} class="card-img-top" alt="food_img" />
                            <div class="card-body">
                                <h5 class="card-title">{i.name}  ₹<span>{i.price}</span></h5>
                                <a class="btn btn-primary" onClick={() => addCart({id: i.id, name: i.name, img: i.img, price: i.price, qty: 1})} >Add to cart</a>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

            <Footer />
        </>
    )
}

export default Cake