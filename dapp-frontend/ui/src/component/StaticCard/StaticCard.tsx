import  React from "react";
import {NavLink} from "react-router-dom";
import "./StaticCard.css" ;
const StaticCard=(props:any)=> {
  return (
    <>
     <div className='col-md-4 col-20 mx-auto '>
       <div className="card-container">
        <div className="row">
        <div className="cardtop ">
            <div className="card-body border border-secondary rounded">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-text" >{props.description}</h6>
              
              <NavLink to={props.links} className="btn btn-outline-info">{props.button}</NavLink>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
   );
};

export default StaticCard;