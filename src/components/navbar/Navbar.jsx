import React from 'react';
import "./Navbar.css";
import {set} from "../../assets/assets.js"

const Navbar = () => {
  return (
    <div className='navbar'>
<img className='logo' src={set.logo} alt="" width={100} height={100} />
   < img className='profile' src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png" alt="" width={100} height={100}/>
    </div>
  )
}

export default Navbar