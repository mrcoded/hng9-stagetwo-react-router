import React from "react"
import Vector from "./img/Vector.png";
import I4G from "./img/I4G.png";

function Footer() {
  return (
    <>
    <div className="footerLine"></div>
    <div className="container-fluid mt-3 mb-10">
          <div className="footerContent">
          <div className="row">
            <div className="col-xl-0"></div>
            <div className="col-sm-3 col-lg-3 col-xl-4 mt-0">
                <img src={Vector} alt="zuri_icon"/>
            </div>
            <div className="col-sm col-lg col-xl-1"></div>
            <div className="col-sm-5 col-lg-5 col-xl-3 mt-1">
              HNG Internship 9 Frontend Task
            </div>

            <div className="col-sm col-lg-1 col-xl-3"></div>
             <div className="col-sm-2 col-lg col-xl-0 mt-2">
              <img src={I4G} alt="ingressive icon"/> 
            </div>

            </div>
          </div>
        </div>
</>
  )
}

export default Footer