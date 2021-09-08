import React from 'react'

import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img
                src="img/hero.png"
                alt="Bankist logo"
                className="nav__logo"
                id="logo"
                />
                <ul className="nav__links">
                <li className="nav__item">
                    Expense Tracker
                </li>
                </ul>
            </nav>
        </header>
    )
}
