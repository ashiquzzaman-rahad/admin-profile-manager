import React from "react";
import './MainSec.css';
import { CheckCircle, ExclamationCircle, ExclamationTriangle, Person, PersonCheck, PersonGear } from 'react-bootstrap-icons';

function MainSec() {
    return (
        <>
            <main>
                <h1>Welcome Admin!</h1>
                <section className="row m-3 text-center fw-bold">
                    <h2>Current Status</h2>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 total-user" >
                        <Person color="black" size={40} /> 
                        <p>Total User: 200</p>
                    </span>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 active-user">
                    <PersonCheck color="black" size={40} /> 
                        <p>Active User: 70</p>
                    </span>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 active-admin">
                    <PersonGear color="black" size={40} />
                        <p>Active Admin: 11</p>
                    </span>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 total-report">
                        <ExclamationTriangle color="black" size={40} />
                        <p>Total Report: 110</p>
                    </span>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 report-resolved">
                    <CheckCircle color="black" size={40} />
                        <p>Report Resolved: 110</p>
                    </span>
                    <span className="d-flex align-items-center card col-sm-3 m-5 p-5 pending-report">
                    <ExclamationCircle color="black" size={40} />
                        <p>Pending Report: 0</p>
                    </span>
                </section>

                <section className="text-justify">
                    <h2 className="text-center">Recent Activities</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic quasi repellat nobis ad. Optio maxime debitis illo libero, esse reiciendis assumenda dignissimos odio reprehenderit. Et vero dolor tenetur aliquid!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, labore laboriosam. Facilis iste nam suscipit ipsa, cupiditate, incidunt voluptatibus ratione accusamus soluta velit harum vel qui. Sit enim fugiat corrupti?</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi tempora aperiam id, non consequatur iste quod autem aliquam, animi sapiente veritatis minus sint dolor, veniam iusto qui doloremque tempore!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae repellat maiores minus eaque quaerat mollitia minima nostrum molestias expedita delectus, blanditiis ullam sapiente quam dolorum similique incidunt illum itaque error?</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                        <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    </ul>
                </section>
                
            </main>
        </>
    )
}

export default MainSec;