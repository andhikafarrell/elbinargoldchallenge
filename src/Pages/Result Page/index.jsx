import React from "react";
import Topnavbar from "../../Components/Navbar/topnavbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

import inova from "../../assets/image 1.png"


import "./style.css"
const Result = () => {
    return (
        <div>
            <Topnavbar />
           <div>
            <div className="kontener1">
                <div>
                    <h1>Pencarianmu</h1>
                </div>
                <div>
                    <div className="kontener1a">
                    <div>
                        <div>
                            <h1>Nama Mobil</h1>
                        </div>
                        <div>
                        <input type="text" placeholder="Innova" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Kategori</h1>
                        </div>
                        <div>
                        <input type="text" placeholder="6-8 orang" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Harga</h1>
                        </div>
                        <div>
                        <input type="text" placeholder="Rp. 400.000 - 600.000" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Status</h1>
                        </div>
                        <div>
                        <input type="text" placeholder="Disewakan" />
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <button className="edit-btn">Edit</button>
                        </div>
                    </div>
                </div>
                    </div>

                   <div className="kontener2">
                    <div className="kontener2a">
                        <div className="kontener2b">
                            <div>
                                <img src={inova}/>
                            </div>
                            <div>
                                <div className="car-desc">
                                    <p>Innova</p>
                                    <h1>Rp.500.000 / hari</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div>
                                    <Link to="/404">
                                    <button className="result-btn">Pilih Mobil</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="kontener2b">
                            <div><img src={inova}/></div>
                            <div>
                                <div className="car-desc">
                                <p>Innova</p>
                                    <h1>Rp.500.000 / hari</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div>
                                <Link to="/404">
                                <button className="result-btn">Pilih Mobil</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="kontener2b">
                            <div><img src={inova}/></div>
                            <div>
                                <div className="car-desc">
                                <p>Innova</p>
                                    <h1>
                                        Rp.500.000 / hari
                                    </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div>
                                <Link to="/404">
                                <button className="result-btn">Pilih Mobil</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default Result