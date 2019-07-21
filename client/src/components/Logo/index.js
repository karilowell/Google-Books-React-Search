import React from "react";
import "./style.css"

function Logo() {
    return (
            <div className="logo">
                <img className="logo-position" src="https://cdn3.iconfinder.com/data/icons/education-flat-icons-shadow/96/18-512.png" alt="Book Icon"/>
                <h1 className="logo-text logo-position google-book-search">Google Search Book </h1>
                <h5 className="logo-text logo-position book-search-small">Search and Save your favorite books</h5>
            </div>
    )
}

export default Logo;