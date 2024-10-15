import Header from "./Header";
import MainSec from "./MainSec";
import Footer from "./Footer";
import './AdminDashboard.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashborad() {
    return (
        <div className="wrapper">
            <nav>
                <Header />
            </nav>
            <div>
                <MainSec />
            </div>
            <div>
                <Footer />
            </div>         
        </div>
    )
};

export default AdminDashborad;