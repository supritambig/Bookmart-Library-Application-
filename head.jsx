import React from 'react'
import "./header.css"

function Header() {
    return (
        <div id='box'>
            <h1>Bookmart Library</h1>
            <p>Your modern campus library portal for reading, borrowing, and learning.</p>
            <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
                alt="Library books"
            />
        </div>
    );
};

export default Header
