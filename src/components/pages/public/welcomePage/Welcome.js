import React from 'react';
import "./welcome.scss";
import Logo from "../../../../assets/image/ParuPayLogo.png"
import { Link } from 'react-router-dom';

function Welcome(props) {
    return (
        <div className="welcome">
            <div className="container">
                <div className="row wel__container">
                    <div className='col image__container'>
                        <img src={Logo} alt='ParuPay' />
                    </div>
                    <div className='logoTXT'>
                        <h2>ParuPay</h2>
                        <h6>The Best Way to <span>Transfer Money</span> Safely</h6>
                    </div>
                </div>

            </div>
            <div className=' btnSection'>
                <Link to="/signup">
                    <button className='primeryBtn'>Create new account</button>
                </Link>
                <Link to="/signin">
                    <button className='secenderyBtn'>Already have an account?</button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;