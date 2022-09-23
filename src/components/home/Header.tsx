import React, { useState } from 'react';
import '../../css/home/Header.css';

const Header = (props: {size: number, translation: boolean, setTranslation: Function}) => {
    const {size, translation, setTranslation} = props;

    const toggleOption = (event: React.SyntheticEvent) => {
        const selector1 = document.getElementById('option-1');
        const selector2 = document.getElementById('option-2');
        if (selector1 === event.target && translation) {
            setTranslation(!translation);
            selector1.style.backgroundColor = 'rgb(62, 136, 239)';
            selector2!.style.backgroundColor = 'black';
        }
        else if (selector2 == event.target && !translation) {
            setTranslation(!translation);
            selector2.style.backgroundColor = 'rgb(62, 136, 239)';
            selector1!.style.backgroundColor = 'black';
        }
    }

    return (
        <div id="header">
            <h1>Quasigroups of Order {size}</h1>
            <div id="options">
                <p id="option-1" className="option" onClick={toggleOption}>Test for Isomorphism</p>
                <p id="option-2" className="option" onClick={toggleOption}>Perform a Translation</p>
            </div>
        </div>
    )
}

export default Header;