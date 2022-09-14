import React from "react";


const style ={
 "flexGrow": "1"
};

const style_dev={
       "fontSize":"28px"
}

export default function Profiledisplay(){
    return(
     <>
     <div className="d-flex align-items-center text-white ml-3" style={style}>
            <h5 className="mb-0">Hello, Beni</h5>
     </div>
     <div className="profile-info d-flex">
            <div className="d-flex align-items-center text-white mr-3">
            <i className='fa fa-power-off' style={style_dev}></i>
            
            </div>
          </div>
     </>
    )
}