import React, { Component } from 'react';
  
function Feature(props){
    return(
        <div className="col-md-3" style={{ marginTop: "20px" }}>
        <div classNamr="card">
          <div className="card-body">
            <p className="">
              <img
                src={props.img}
                className="card-img-top"
                alt={props.title}
              />
            </p>
            <h5>{props.title}</h5>
            <p>{props.location}</p>
          </div>
        </div>
      </div>        
    )
}

export default Feature;