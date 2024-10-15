import React from "react"
import './NotificationMainSec.css';
import { AppIndicator, Bell,  Calendar2, Check2Circle, Megaphone, MegaphoneFill, Mic } from 'react-bootstrap-icons';

function NotificationMainSec() {
    return (
        <main>
            <section className="row m-3 text-center fw-bold">
                <h2>Notification Overview</h2>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 read" >
                <Bell color="black" size={30} /><Check2Circle color="black" size={40} />
                    <p>Read: 200</p>
                </span>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 unread">
                    <Bell color="black" size={30} /><AppIndicator color="black" size={40} />
                    <p>Unread: 70</p>
                </span>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 today">
                <Bell color="black" size={30} /><Calendar2 color="black" size={40} />
                    <p>Today: 11</p>
                </span>
            </section>

            <section className="text-justify">
                <h2 className="text-center">Notifications</h2>
                <ul className="list-group">
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic quasi repellat nobis ad. Optio maxime debitis illo libero, esse reiciendis assumenda dignissimos odio reprehenderit. Et vero dolor tenetur aliquid!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, labore laboriosam. Facilis iste nam suscipit ipsa, cupiditate, incidunt voluptatibus ratione accusamus soluta velit harum vel qui. Sit enim fugiat corrupti?</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi tempora aperiam id, non consequatur iste quod autem aliquam, animi sapiente veritatis minus sint dolor, veniam iusto qui doloremque tempore!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae repellat maiores minus eaque quaerat mollitia minima nostrum molestias expedita delectus, blanditiis ullam sapiente quam dolorum similique incidunt illum itaque error?</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                    <li className="list-group-item"><MegaphoneFill size={20} color="red"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, praesentium dolor amet et unde officiis dignissimos labore ullam at esse cumque doloribus consequuntur itaque inventore repellat ducimus nulla deserunt accusamus!</li>
                </ul>
            </section>
        </main>
    )
};

export default NotificationMainSec;