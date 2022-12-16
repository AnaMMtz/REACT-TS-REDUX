
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="" style={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}>
        <div>
            <h1>
                <Link to={"/"} style={{textDecoration:"none"}}>
                    ATSM USERS
                </Link>
            </h1>
        </div>

        <Link to={"/user"} className='' style={{textDecoration:"none", marginTop:"20px"}}>
            New User &#43;
        </Link>
    </nav>

    </>
  )
}

export default Header