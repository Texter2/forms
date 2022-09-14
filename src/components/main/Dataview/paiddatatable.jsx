import React from 'react';
import '../../../Utility/css/tabledata.css';

export default function Paiddata(){
     return(
    
      <div className="col-md-6">
                <h5 className="font-20 font-weight600 text-uppercase"><i className="fa fa-pie-chart"></i> Paid Data :</h5>
                <p className="font-15">Below is the requested data.</p>
                <div className="content-data-table">
                  <table className="table table-bordered paid-free-table ">
                     <thead>
                        <tr>
                          <th width="40%">Category</th>
                          <th width="60%">Report Name</th>
                        </tr>
                      </thead>
                    <tbody className="font-15">
                      <tr>
                        <td><p>Food and Beverage</p></td>
                        <td>
                           <p><a href="/" className="content-link">Freeze Dried Fruits Market</a></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <p>Travel & Tourism</p>
                        </td>
                        <td>
                           <p><a href="/" className="content-link">Educational Tourism Market</a></p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <div className="text-center my-2">
                            <button className="btn btn-view-more font-15"> View All</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
     )
}