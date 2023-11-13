import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";


import "./style.css"

const SearchCar = () => {
    return (
        <div>
            <Header />
            <div className="container1">
                <div>
                    <div className="c">
                        <p>Nama Mobil</p>
                    </div>
                    <div className="btn1">
                        <input type="text" placeholder="Ketik nama/tipe mobil" />
                    </div>
                </div>
                <div className="c">
                    <div>
                        <p>Kategori</p>
                    </div>
                    <div className="btn1">
                    <input type="text" placeholder="Masukkan kapasitas mobil" />
                    </div>
                </div>
                <div className="c">
                    <div>
                        <p>Harga</p>
                    </div>
                    <div className="btn1">
                    <input type="text" placeholder="Masukkan harga sewa per hari" />
                    </div>
                </div>
                <div className="c">
                    <div>
                        <p>Status</p>
                    </div>
                    <div className="btn1">
                    <input type="text" placeholder="Disewa" />
                    </div>
                </div>
                <div className="c">
                    <div></div>
                    <div>
                    <Link to="/result">
                    <button className="btn-search">Cari Mobil</button>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchCar

