import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({loggedIn}) {
    return (
        <div>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
            {loggedIn &&  <Link to="/comp">
                <button>
                    complaints
                </button>
            </Link> }
           

        </div>
    )
}

export default Navbar
