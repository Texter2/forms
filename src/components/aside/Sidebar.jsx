import React from "react";
import '../../Utility/css/sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function Sidebar(){

  const [isActive , setState] = useState(false);

  const toggleClass =(i)=>{
    setState(i);
  }
  
  const sideMenuJson =[
    {
    name :' Home',
    pass2:'fa fa-home', 
    spanclass:'icon-bg rad-bg-success'},
  {
    name :' Free Data',
    pass2:'fa fa-file-text',
    spanclass:'icon-bg rad-bg-danger'
  },
  {
    name :' Paid Data',
    pass2:'fa fa-pie-chart',
    spanclass:'icon-bg rad-bg-primary'
  },
  {
    name :' Order',
    pass2:'fa fa-shopping-cart',
    spanclass:'icon-bg rad-bg-warning'
  },
  {
    name :' Transaction',
    pass2:'fa fa-bank',
    spanclass:'icon-bg rad-bg-violet'
  },
  {
    name :' Profile',
    pass2:'fa fa-users',
    spanclass:'icon-bg rad-bg-violet'
  }
]; 
    return (
      <nav className="rad-sidebar">
        <ul className="list-unstyled">
        { 
        sideMenuJson.map((item,index) =>
          <li className={isActive === index? "active":null} 
           onClick={()=>toggleClass(index)} key ={index}>
            {console.log(index + ' '+ isActive)}
            <a href="#">
              <i className={item.pass2}>
                  <span className={item.spanclass}></span>
              </i>
              <span className="rad-sidebar-item">{item.name}</span>
            </a>
          </li> 
          )
         }
        </ul>
      </nav>
    )
}