import { Link } from 'gatsby';
import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <footer>
            <div className="social">
                <a target='_blank' href="https://twitter.com/foles4h">
                    <img src={require('../images/twitter.png')} alt="" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/horacio-flores-4744b01b4/">
                    <img src={require('../images/linkendin.png')} alt="" />
                </a>
                <a target='_blank' href="https://github.com/foles">
                    <img src={require('../images/github.png')} alt="" />
                </a>
                <a target='_blank' href="https://www.instagram.com/foles4h/?hl=es-la">
                    <img src={require('../images/insta.png')} alt="" />
                </a>
            </div>

            <p>MADE WITH 💙 2020</p>
        </footer>
    );
}

export default footer;
