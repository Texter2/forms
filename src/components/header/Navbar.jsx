import React from "react";
import '../../Utility/css/header.css';
import Logocomp from "./logo";
import Profiledisplay from "./Profiledisplay";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return(
        <nav className="rad-navigation primary-bg-color">
         <Logocomp />
         <Profiledisplay />  
         </nav>

    )
}