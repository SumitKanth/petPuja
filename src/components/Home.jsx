import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../style.css';
import foodImg from '../img/food_img.jpg';
import drinkImg from '../img/drink_img.avif';
import cakeImg from  '../img/cake_img.webp';
import food from '../img/food.jpg';
import cake from '../img/cake.jpeg';
import drink from '../img/drink.jpg';

const Home = () => {

    let card_style = {
        "width": "18rem"
    }

    return (
        <>
            <Header />
            {/* <div className="head"> */}

                {/* <div className="left">
                    <h1>Hello I am Sumit</h1>
                </div> */}


                {/* <div className="right"> */}
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={foodImg}class="d-block w-100 carousel_img" alt="food_img" />
                        </div>
                        <div class="carousel-item">
                        <img src={drinkImg} class="d-block w-100 carousel_img" alt="drink_img" />
                        </div>
                        <div class="carousel-item">
                        <img src={cakeImg} class="d-block w-100 carousel_img" alt="cake_img" />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            {/* </div> */}
            

            <div className="food_content">
                <h1>Get Your Taste</h1>

                <div className="foods">

                    <div class="card card_color" style={card_style}>
                    <img src={food} class="card-img-top" alt="food_img" />
                    <div class="card-body">
                        <h5 class="card-title">Foods</h5>
                        <p class="card-text">Get your favourite food just in one click.</p>
                        <a href="/#/food" class="btn btn-primary">Go To Foods</a>
                    </div>
                    </div>

                    <div class="card card_color" style={card_style}>
                    <img src={drink} class="card-img-top" alt="drink_img" />
                    <div class="card-body">
                        <h5 class="card-title">Drinks</h5>
                        <p class="card-text">Get your drinks just in one click.</p>
                        <a href="/#/drink" class="btn btn-primary">Go To Drinks</a>
                    </div>
                    </div>

                    <div class="card card_color" style={card_style}>
                    <img src={cake} class="card-img-top" alt="cake_img" id="cake_img"/>
                    <div class="card-body">
                        <h5 class="card-title">Cakes</h5>
                        <p class="card-text">Get your drinks just in one click.</p>
                        <a href="/#/cake" class="btn btn-primary">Go To Cakes</a>
                    </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>

    );
}

export default Home