import React from 'react';
import { useState } from 'react';
import cartImg from '../img/cart_img.png';
import '../style.css'
import logo from '../img/logo.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Header() {
    const isAuth = localStorage.getItem('isLogin');
    console.log(typeof(isAuth));
    const { cart_cnt } = useSelector(state => state.cart)

    const [ifHam, setIfHam] = useState(false);

    const navigate = useNavigate();

    const hamBurger = () => {
        let nav_bar = document.getElementById("nav_bar");
        let cart_img = document.querySelector(".cart_img");
        let cart_cnt = document.getElementById("cart_cnt");
        if (!ifHam) {
            nav_bar.style.height = "19rem";
            cart_img.style.marginLeft = "-20px";
            cart_img.style.marginTop = "8px";
            cart_cnt.style.left = "2rem";
            cart_cnt.style.top = "-9px";
            setIfHam(true);
        }
        else {
            nav_bar.style.height = "5rem";
            nav_bar.style.marginLeft = "0px";
            setIfHam(false);
        }
    }

    const logout = async () => {

        axios.defaults.withCredentials = true;
        try {
            const user = await axios.get(`/user/logout`);
            console.log(user);
        } catch (err) {
            console.log("err", err);
        }
        localStorage.setItem('isLogin', "false");
        toast("Miss You 😢");
        navigate('/');
    }

    const isAuthUser = async () => {
        if(isAuth === "false")
            toast("Login First 😒")
    }
    

    return (
        <>
            <nav className="navbar navbar-expand-lg" id='nav_bar'>
                <div className="container-fluid">
                    <a className="navbar-brand txtColor" href="/"><img src={logo} alt="logo" className='logoSize' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={hamBurger}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item nav_link">
                                <Link className="nav-link active txtColor" id='homeTextColor' aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item nav_link">
                                <Link className="nav-link active txtColor" aria-current="page" to="/menu">Menu</Link>
                            </li>

                            <li className="nav-item nav_link">
                                {(localStorage.getItem("isLogin") === "true")
                                    ? <Link className="nav-link active txtColor" onClick={logout} aria-current="page" to="/" >Logout</Link>
                                    : <Link className="nav-link active txtColor" aria-current="page" to="/signup">Sign Up</Link>
                                }
                            </li>

                            <li className="nav-item nav_link">
                                {
                                    (isAuth === "true") ? <Link className="nav-link active txtColor" aria-current="page" to="/orders">Prev_Orders</Link> : 
                                    <Link className="nav-link active txtColor" onClick={isAuthUser} aria-current="page" to="/signup">Prev_Orders</Link>
                                }
                            </li>

                            <li className="nav-item nav_link">
                                <span id='cart_cnt'>{cart_cnt}</span>
                                <Link to="/checkout"><img src={cartImg} alt="cart_img" className='cart_img' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header