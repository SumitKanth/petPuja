import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import '../style.css'
import Footer from "./Footer";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [number, setNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comPass, setComPass] = useState("");

    const goToLogin = () => {
        navigate("/login");
    }

    axios.defaults.withCredentials = true;
    const submitHandeler = async(e) => {
        e.preventDefault();

        if(password !== comPass)
            return toast(`password dosn't match which comfirm password`);

        try {
            const user = await axios.post(`/user/signup`, {name, number, email, password});
            
            toast(`${name} welcome to pet puja 😍`);
            navigate('/');
            localStorage.setItem('isLogin', "true");
        } catch (error) {
            if(error.response.data.success === false){
                toast(`${name} you are allready exist`);
                navigate('/login');
            }
        }
    }

    return (
        <>

            <Header />

            <div className="signup_content">
                <h1>Sign Up To Get Your Food</h1>
                <div className="signup">
                    <form className="singup_form" onSubmit={submitHandeler}>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your name"/>
                    <input type="number" name="number" onChange={(e) => setNumber(e.target.value)} id="number" placeholder="Enter Your number"/>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Your Email"/>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter Your password"/>
                    <input type="password" name="confirm_password" onChange={(e) => setComPass(e.target.value)} id="confirm_password" placeholder="Confirm Password"/>
                    <button>Submit</button>
                    </form>
                </div>

                <p>Already Have Account ? <span onClick={goToLogin}>Login</span></p>

            </div>

            <Footer />

        </>
    );
}

export default Signup