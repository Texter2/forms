import React from 'react';
import '../../Utility/css/dashboardclient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introcomp from './intro';
import Paiddata from './Dataview/paiddatatable';
import Freedata from './Dataview/freedatatable';

export default function Dashboardclient(){

    const colorArray = [
        {pass: 'counting-box green-box',pass1:'bg-green-icon header-circle',pass2 : 'Ongoing',
        pass3:'fa fa-area-chart'
      },
        {pass: 'counting-box orange-box',pass1:'bg-orange-icon header-circle',
        pass2:'Subscribed',
        pass3:'fa fa-line-chart'},
        {pass: 'counting-box oblien-box',pass1:'bg-olien-icon header-circle',pass2:'Orders Report',
        pass3:'fa fa-shopping-cart'}
         ];


    return(
        <>
  
        <div className="rad-body-wrapper">

          <div className="container-fluid">
          <Introcomp />
          <div className="row mt-4 justify-content-between">
        {
            colorArray.map((item,index) =>
              <div className="col-md-4 w-28" key ={index}>
                <div className={item.pass}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={item.pass1}>
                      <i className = {item.pass3}></i>
                      </div>
                     </div>
                     <div className="col-md-8 d-flex new-report-info">
                      <p><span className="counter-count">15</span> </p>
                      <p className="font-16">{item.pass2} <br/> Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
    </div>
    <div className = "row mt-5 row mt-5 report-listing mb-4">
    <Paiddata />
    <Freedata />
    </div>
    </div>
    </div>
    </>
    );
}