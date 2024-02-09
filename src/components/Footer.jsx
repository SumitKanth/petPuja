import React from 'react';
import '../style.css'
import gitHub from '../img/github.png';
import leetCode from '../img/leetcode.png';
import linkedIn from '../img/linkedIn.png';
import insta from '../img/insta.png';

function Footer() {
  return (
    <>
        <div className="footer_content">
                <div className="container">
                    <div className="left">
                        <a href="https://github.com/SumitKanth" target="_black"><img className="github" src={gitHub} alt="github_img" /></a>
                        <a href="https://leetcode.com/sumitkanth999/" target="_black"><img className="leetcode"  src={leetCode} alt="leetcode_img" /></a>

                    </div>

                    <div className="middle">
                        <p>Made By Sumit © 2023</p>
                    </div>

                    <div className="right">
                    <a href="https://www.linkedin.com/in/sumit-kanth-057873228/" target="_black"><img className="linkedIn" src={linkedIn} alt="linkedIn_img" /></a>
                    <a href="https://www.instagram.com/sumit.kanth.12/" target="_blank"><img className="insta" src={insta} alt="insta_img" /></a>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Footer