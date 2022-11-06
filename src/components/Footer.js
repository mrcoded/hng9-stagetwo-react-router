import React from "react"
import Vector from "./img/Vector.png";
import I4G from "./img/I4G.png";

function Footer() {
  return (
    <>
    <div className="footerLine"></div>
    <div className="container-fluid mt-3 pb-5">
          <div className="footerContent">
          <div className="row">
            <div className="col-xl-0"></div>
            <div className="col-sm-4 col-lg-4 col-xl-5 mt-0">
                <img src={Vector} alt="zuri_icon"/>
            </div>
            {/* <div className="col-lg col-xl-1"></div> */}
            <div className="col-sm-5 col-lg-6 col-xl-6 mt-2">
              <footer className="h6"> HNG Internship 9 Frontend Task</footer>
            </div>

            {/* <div className="col-lg-1 col-xl-3"></div> */}
             <div className="col-sm-3 col-lg-2 col-xl-1 mt-2">
              <img src={I4G} alt="ingressive icon"/> 
            </div>

            </div>
          </div>
        </div>
</>
  )
}

export default Footer