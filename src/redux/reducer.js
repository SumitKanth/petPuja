import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction('addToCart');
const deleteItem = createAction('deleteItem');
const decrement = createAction('decrement');

export const cartReducer = createReducer(
    {
        cart: (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
        cart_cnt: (localStorage.getItem('cart_cnt')) ? localStorage.getItem('cart_cnt') : 0,
        price: (localStorage.getItem("price")) ? Number(localStorage.getItem("price")) : Number(0),
        tax: (localStorage.getItem("tax")) ? Number(localStorage.getItem("tax")) : Number(0),
        totalPrice: (localStorage.getItem("totalPrice")) ? Number(localStorage.getItem("totalPrice")) : Number(0)

    },
    (builder) => {
        // Add Case
        builder.addCase(addToCart, (state, action) => {
            const items = action.payload;
            const id = items.id;
            var isMatch = false;
            state.cart.map((i) => {
                if(i.id === id){
                    isMatch = true;
                }
            })

            if(isMatch){
                state.cart.forEach((i, ind) => {
                    if(i.id === id){
                        state.cart[ind].qty++;
                    } 
                })
            }
            else{
                state.cart_cnt++;
                state.cart.push(items);
                localStorage.setItem("cart_cnt", state.cart_cnt);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));

            state.price+= Number(items.price);
            state.tax+=5;
            state.totalPrice = (Number(state.price) + Number(state.tax));

            localStorage.setItem("price", state.price);
            localStorage.setItem("tax", state.tax);
            localStorage.setItem("totalPrice", state.totalPrice);
        })

        // Delete Item
        builder.addCase(deleteItem, (state, action) => {
            let item = action.payload;
            const total_amt = Number(item.qty) * Number(item.price);
            state.price-= total_amt;
            state.tax-= (Number(item.qty) * 5);
            const new_cart = state.cart.filter((i) => i.id !== item.id);
            state.totalPrice = (Number(state.price) + Number(state.tax));
            state.cart_cnt--;
            localStorage.setItem("cart_cnt", state.cart_cnt);
            localStorage.setItem("cart", JSON.stringify(new_cart));
            localStorage.setItem("price", state.price);
            localStorage.setItem("totalPrice", state.totalPrice);
            localStorage.setItem("tax", state.tax);
        })

        // decrement
        builder.addCase(decrement, (state, action) => {
            const items = action.payload;

            state.cart.forEach((i, ind) => {
                if(i.id === items.id){
                    state.cart[ind].qty--;
                }
            })

            localStorage.setItem("cart", JSON.stringify(state.cart))

            state.price-= Number(items.price);
            state.tax-= 5;

            state.totalPrice = (Number(state.price) + Number(state.tax));

            localStorage.setItem("price", state.price);
            localStorage.setItem("tax", state.tax);
            localStorage.setItem("totalPrice", state.totalPrice);
        })
    }
)