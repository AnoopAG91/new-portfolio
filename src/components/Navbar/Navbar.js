import React from 'react'
import './Navbar.css'
//FONT AWESOME ICON IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>

            <a class="navbar-brand"><button onClick={()=>navigate("/")}><span>A</span>NOOP</button></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" ><button onClick={()=>navigate("/")}>Home</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><button onClick={()=>navigate("/About")}>About</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><button onClick={()=>navigate("/Projects")}>Projects</button></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><button onClick={()=>navigate("/Contact")}>Contact</button></a>
                </li>
                </ul>
            </div>

</div> 
</nav>
  )
}

export default Navbar