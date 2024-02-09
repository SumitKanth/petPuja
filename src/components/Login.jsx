import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom"
import '../style.css'
import Footer from "./Footer";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {

    const [number, setNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    
    const goToSignUp = () => {
        navigate("/signup");
    }
    
    axios.defaults.withCredentials = true;
    const sumbitHandler = async (e) => {
        e.preventDefault();

        try{
            const user = await axios.post(`/user/login`, {number, email, password});

            toast(`${user.data.message}`);
            navigate('/');
            localStorage.setItem('isLogin', "true");
        }catch(err){
            // if(err.response.data.success === false){
            //     toast('Given data is wrong');
            // }
            console.log("err: ", err);
        }
    }
    // react form hook
    
    return (
        <>

            <Header />

            <div className="login_content">
                <h1>Login To Get Your Food</h1>
                <div className="login">
                    <form className="singup_form" onSubmit={sumbitHandler}>
                    <input type="number" name="number" id="number" required placeholder="Enter Your number"  value={number} onChange={(c) => setNumber(c.target.value)}/>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email"  value={email} onChange={(c) => setEmail(c.target.value)}/>
                    <input type="password" name="password" id="password" required placeholder="Enter Your password" value={password} onChange={(c) => setPassword(c.target.value)}/>
                    <button>Submit</button>
                    </form>
                   
                </div>

                <p>Don't Have Account ? <span onClick={goToSignUp}>SignUp</span></p>
            </div>

            <Footer />

        </>
    );
}

export default Login