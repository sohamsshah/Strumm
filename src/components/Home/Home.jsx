import React from 'react'
import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            I am Home
            <button><Link to="/categories">Go to Categories</Link> </button>
        </div>
    )
}

export default Home
