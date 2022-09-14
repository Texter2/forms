import React from "react";

export default function Transaction (){
    return (
        <div className="rad-body-wrapper">
        <div className="container-fluid">
          <div className="row mt-2 table-listing mb-4">
            <div className="col-md-12">
              <h5 className="font-20 font-weight600 text-uppercase">
                <i className="fa fa-bank"></i>
                Transaction :
              </h5>
              <p className="font-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <div className="content-data-table">
                <table className="table table-bordered">
                   <thead className="text-center">
                      <tr>
                        <th width="10%" scope="col">Project Id</th>
                        <th width="20%" scope="col">Categery</th>
                        <th width="30%" scope="col">Report Name</th>
                        <th width="15%" scope="col">Delivery Date</th>
                        <th width="10%" scope="col">Invoice</th>
                        <th width="25%" scope="col">Status</th>
                      </tr>
                    </thead>
                  <tbody className="font-15 text-center">
                    <tr>
                      <td>19001-A</td>
                      <td>Food and Beverage</td>
                      <td>Beby Food Market</td>
                      <td>25-06-2022</td>
                      <td><a href="#" className="btn btn-download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg></a>
                      </td>
                      <td><span className="badge badge-pill badge-info table-status">In Process</span></td>
                    </tr>
                    <tr>
                      <td>19002-A</td>
                      <td>Industrial Automation</td>
                      <td>Desiccant Wheel Market</td>
                      <td>25-06-2022</td>
                      <td><a href="#" className="btn btn-download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg></a>
                      </td>
                      <td><span className="badge badge-pill badge-success table-status">Delivered</span></td>
                    </tr>
                    <tr>
                      <td>19003-A</td>
                      <td>Chemicals and Materials</td>
                      <td>Drain Camera Market</td>
                      <td>25-06-2022</td>
                      <td><a href="#" className="btn btn-download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg></a>
                      </td>
                      <td><span className="badge badge-pill badge-warning table-status">Refuned</span></td>
                    </tr>
                    <tr>
                      <td>19004-A</td>
                      <td>Healthcare</td>
                      <td>Bioprocess Technology Market</td>
                      <td>25-06-2022</td>
                      <td><a href="#" className="btn btn-download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg></a>
                      </td>
                      <td><span className="badge badge-pill badge-primary table-status">In Process</span></td>
                    </tr>
                    <tr>
                      <td>19005-A</td>
                      <td>Industrial Automation</td>
                      <td>Desiccant Wheel Market</td>
                      <td>25-06-2022</td>
                      <td><a href="#" className="btn btn-download">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                          </svg>
                        </a>
                      </td>
                      <td><span className="badge badge-pill badge-success table-status">Delivered</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}