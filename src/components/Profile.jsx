import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
  return (
    <>
        <Header />

        <div className="user_profile">
            <h1>Sumit Profile</h1>
            <div className="user">
                    <p>Name: Sumit</p>
                    <p>Email: sumitkanth999@gmail.com</p>
                    <p>Number: 9582533644</p>
                    <p>Address: 329A, Anant Niwas Uttrakhand Enclave Burari Delhi 110084</p>
                    <button className='edit_btn'>Edit Profile</button>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Profile