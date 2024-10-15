import React from "react"
import Header from "./Header";
import ReportMainSec from "./ReportMainSec";
import Footer from "./Footer";

function Report(){
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div>
        <ReportMainSec />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default Report;