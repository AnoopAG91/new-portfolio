import React from 'react'
import './Navbar.css'
//FONT AWESOME ICON IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {useNavigate,} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Navbar() {
    const navigate=useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>

            <Link className="navbar-brand"><button onClick={()=>navigate("/")}><span>A</span>NOOP</button></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link"><button onClick={()=>navigate("/")}>Home</button></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" ><button onClick={()=>navigate("/About")}>About</button></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" ><button onClick={()=>navigate("/Projects")}>Projects</button></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"><button onClick={()=>navigate("/Contact")}>Contact</button></Link>
                </li>
                </ul>
            </div>

</div> 
</nav>
  )
}

export default Navbar