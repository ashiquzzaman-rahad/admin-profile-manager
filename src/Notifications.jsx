import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import './Notifications.css';
import NotificationMainSec from "./NotificationMainSec";


function Notifications(){
  return (
    <div className="wrapper">
        <div>
            <Header />
        </div>
        <div className="mid">
            <NotificationMainSec />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
};

export default Notifications;