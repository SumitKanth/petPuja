import pizza from '../img/pizza.jpg'
import burger from '../img/burger.avif'
import choumin from '../img/choumin.jpg'
import butterCream from '../img/buttercream.jpg'
import melted_chocolate from '../img/melted_chocolate.jpg'
import royal_icing from '../img/royal_icing.jpeg'
import grape_soda from "../img/grape_soda.webp";
import fruit_punch from "../img/fruit_punch.jpg";
import rum from "../img/rum.webp";

export const foodMenuApi = () => {
    return [
        {
            id: 1,
            name: "PIZZA",
            img: pizza,
            price: 300
        },

        {
            id: 2,
            name: "BURGER",
            img: burger,
            price: 150
        },

        {
            id: 3,
            name: "CHOUMIN",
            img: choumin,
            price: 500
        }
    ]
}

export const drinkMenuApi = () => {
    return [
        {
            id: 20,
            name: "Grape Soda",
            img: grape_soda,
            price: "200"
        },

        {
            id: 21,
            name: "Fruit Punch",
            img: fruit_punch,
            price: "350"
        },

        {
            id: 22,
            name: "Rum",
            img: rum,
            price: "500"
        }
    ]
}

export const cakeMenuApi = () => {
    return [
        {
            id: 31,
            name: "Butter Cream",
            img: butterCream,
            price: "200"
        },

        {
            id: 32,
            name: "Melted Chocolate",
            img: melted_chocolate,
            price: "200"
        },

        {
            id: 33,
            name: "Royal Icing",
            img: royal_icing,
            price: "200"
        }
    ]
}