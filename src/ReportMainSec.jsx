import React from "react"
import './ReportMainSec.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppIndicator, Bell, Calendar2, Check2Circle, ExclamationDiamond, ExclamationTriangle, ExclamationTriangleFill, Megaphone, MegaphoneFill, Mic } from 'react-bootstrap-icons';

function ReportMainSec() {
    return (
        <main>
            <section className="row w-100 m-3 text-center fw-bold">
                <h2>Report Overview</h2>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 total-report" >
                    <ExclamationTriangle color="black" size={40} />
                    <p>Total Report: 200</p>
                </span>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 pending">
                    <ExclamationTriangleFill color="black" size={40} />
                    <p>Resolve Pending: 70</p>
                </span>
                <span className="d-flex align-items-center card col-sm-3 m-5 p-5 resolved">
                    <Check2Circle color="black" size={40} />
                    <p>Resolved: 11</p>
                </span>
            </section>

            <section className="text-center table-responsive">
                <h2 className="text-center">Reports</h2>
                    <table className="table table-secondary table-striped table-bordered align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Reporting User</th>
                                <th scope="col">Reported User</th>
                                <th scope="col" className="post">Reported Post</th>
                                <th scope="col" className="desc">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem ipsum dolor</td>
                                <td>Lorem ipsum dolor</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rem numquam corporis reiciendis sit dolorem beatae? Doloremque iste voluptatum quod!</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis vitae voluptas, corrupti, rem omnis asperiores placeat ipsam quia, quis obcaecati est ipsa amet temporibus aspernatur quam. Quasi eveniet expedita deserunt architecto, alias est asperiores, voluptas inventore rem nemo placeat et quia nam corrupti provident? Id qui sunt rem consectetur voluptas iure omnis totam esse sapiente cum quod ullam quam veniam porro accusantium quaerat similique sequi eaque expedita maxime a neque, magni consequatur. Eius quibusdam ut quos accusantium alias facere quod voluptate molestiae possimus officia, enim voluptates fugit dolorum blanditiis dolore minima excepturi eum quae quaerat similique suscipit est voluptas!</td>
                                <td>24 September, 2024</td>
                                <td><button className="button rounded border border-0 bg-primary">Resolve</button></td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor</td>
                                <td>Lorem ipsum dolor</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rem numquam corporis reiciendis sit dolorem beatae? Doloremque iste voluptatum quod!</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis vitae voluptas, corrupti, rem omnis asperiores placeat ipsam quia, quis obcaecati est ipsa amet temporibus aspernatur quam. Quasi eveniet expedita deserunt architecto, alias est asperiores, voluptas inventore rem nemo placeat et quia nam corrupti provident? Id qui sunt rem consectetur voluptas iure omnis totam esse sapiente cum quod ullam quam veniam porro accusantium quaerat similique sequi eaque expedita maxime a neque, magni consequatur. Eius quibusdam ut quos accusantium alias facere quod voluptate molestiae possimus officia, enim voluptates fugit dolorum blanditiis dolore minima excepturi eum quae quaerat similique suscipit est voluptas!</td>
                                <td>24 September, 2024</td>
                                <td><button className="button rounded border border-0 bg-primary">Resolve</button></td>
                            </tr>
                        </tbody>
                    </table>
            </section>

        </main>
    )
};

export default ReportMainSec;