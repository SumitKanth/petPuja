import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dilivery_boy from "../img/dilivery_boy.gif";
import toast from "react-hot-toast";

const Checkout = () => {

    const div_boy = {
        "position": "absolute",
        "zIndex": 12,
        "top": "0",
        "left": "0",
        "right": "0",
        "display": "none",
        "overflow": "hidden"
    }

    const divi_img = {
        "height": "100vh",
        "width": "100vw"
    }

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {cart, price, tax, totalPrice} = useSelector(state => state.cart);

    const increment = (option) => {
        dispatch({
            type: "addToCart",
            payload: option
        })
    }

    const deleteItem = (option) => {
        dispatch({
            type: "deleteItem",
            payload: option
        })
        window.location.reload();
    }

    const decrement = (option) => {
        if(option.qty === 1){
            dispatch({
                type: "deleteItem",
                payload: option
            })
        }
        else{
            dispatch({
                type: "decrement",
                payload: option
            })
        }
        window.location.reload();
    }

    const payment = () => {
        if(localStorage.getItem("totalPrice") === '0')
            return toast("first buy anything");
        if(!localStorage.getItem("isLogin")) 
            localStorage.setItem("isLogin", "false")
        if(localStorage.getItem("isLogin") === "false"){
            toast("Login First");
            navigate('/login');
        }
        else{
            let pop_up_div = document.getElementById("div_pop_up");
            pop_up_div.style.display = "block";
        }
    }

    return (
        <>
            <Header />

            <div className="checkout_content">

                <div className="recent_checkout">
                    <h3>Your Recent Order's</h3>

                    <div className="checkout_orders">
                        {
                            cart.map((i) => {
                                return (
                                    <div className="checkout_items">
                                        <img src={i.img} alt="img" />
                                        <h3>{i.name} ₹{i.price}</h3>
                                        <div className="more_item">
                                            <button onClick={() => increment({id: i.id, name: i.name, img: i.img, price: i.price, qty: i.qty})}>+</button>
                                            <span>{i.qty}</span>
                                            <button onClick={() => decrement({id: i.id, name: i.name, img: i.img, price: i.price, qty: i.qty})}>-</button>
                                        </div>

                                        <div className="delete_icon">
                                            <svg onClick={() => deleteItem({id: i.id, name: i.name, img: i.img, price: i.price, qty: i.qty})} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="checkout_price">
                    <h3 className="total_price">Your Total Price</h3>

                    <div className="pay">
                        <h3>Price: {price}</h3>
                        <h3>Shipment Price:  {(!price) ? 0 : 100}</h3>
                        <h3>Tax: {tax}</h3>

                        <h3> <span>Total Price:</span> {(!price) ? 0 : totalPrice+100}</h3>
                    </div>

                    <button onClick={payment} className="checkout_btn">Make Payment</button>
                </div>

            </div>

            {/* Dilivery Boy */}
            <div className="dilivery_boy" style={div_boy} id="div_pop_up" >
                <img src={dilivery_boy} alt="d_boy" style={divi_img} />
            </div>

            <Footer />
        </>
    )
}

export default Checkout