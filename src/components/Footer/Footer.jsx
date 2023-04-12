import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css";
import { AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { TfiTwitter } from 'react-icons/tfi'
export const Footer = () => {
    return (
        <footer className='lyt__footer'>
            <p>Contact Us </p>
            {/* <p>Contact @ knockout-trading.com</p> */}
            <ul>
                <li>
                    <AiOutlineMail size={32} />
                </li>
                <li>
                    <AiOutlineFacebook size={32} />
                </li>
                <li>
                    <TfiTwitter size={32} />
                </li>
            </ul>
            <p>Ⓒ2022 Knockout Trading Ltd. All Rights Reserved.</p>
        </footer>
    )
}
