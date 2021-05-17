import React from 'react'
import './header.css'

export default ({blackHeader}) => {
    return (
        <header className={blackHeader ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Ntrecgf.png" alt="Logo png"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/" className="header--user">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User"></img>
                </a>
            </div>
            
        </header>

    )
}