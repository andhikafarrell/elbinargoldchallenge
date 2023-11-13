import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

import girl from "../../assets/Happy Girl - 961x1443 1.png"
import check from "../../assets/fi_check.png"
import thumb from "../../assets/fi_thumbs-up.png"
import tag from "../../assets/fi_tag.png"
import clock from "../../assets/fi_clock.png"
import medal from "../../assets/fi_award.png"
import men from "../../assets/img_photo.png"
import star from "../../assets/Star 3.png"
import arrow from "../../assets/fi_chevron-down.png"


import "./style.css"
const Home = () => {
    return (
        <div className="body">
            <div>
                <Header />
            </div>
            <div className="body2">
                <div className="a1">
                    <div className="imgcontainer">
                        <div className="mediumb"></div>
                        <div className="smallb1"></div>
                        <div className="bigb">
                            <img src={girl} />
                        </div>
                        <div className="smallb2"></div>
                    </div>
                    <div className="ap1">
                        <div className="ap11">Best Car Rental for any kind of trip in (Lokasimu)!</div>
                        <div className="ap12">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</div>
                        <div className="ap13">
                            <div>
                            </div>
                            <div>
                                <div><img className="checkbox" src={check} /> Sewa Mobil Dengan Supir di Bali 12 Jam</div>
                                <div><img className="checkbox" src={check} /> Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
                                <div><img className="checkbox" src={check} /> Sewa Mobil Jangka Panjang Bulanan</div>
                                <div><img className="checkbox" src={check} /> Gratis Antar - Jemput Mobil di Bandara</div>
                                <div><img className="checkbox" src={check} /> Layanan Airport Transfer / Drop In Out</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a2">
                    <div className="ap2">
                        <h1 className="ap21">Why Us</h1>
                        <p className="ap22">Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="bubbles">
                        <div className="bubbles1">
                            <div className="thumb"><img src={thumb} /></div>
                            <div>
                                <h1>Mobil Lengkap</h1>
                                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                        <div className="bubbles1">
                            <div className="tag"><img src={tag} /></div>
                            <div>
                                <h1>Harga Murah</h1>
                                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                        <div className="bubbles1">
                            <div className="clock"><img src={clock} /></div>
                            <div>
                                <h1>Layanan 24 Jam</h1>
                                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                        <div className="bubbles1">
                            <div className="medal"><img src={medal} /></div>
                            <div>
                                <h1>Supir Profesional</h1>
                                <p>Supir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a3">
                    <div className="ap3">
                        <h1>Testimonial</h1>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <div className="testbubble">
                        <div><img src={men} /></div>
                        <div>
                            <div></div>
                            <div className="ap31">
                                <div className="star"><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
                                <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h1>
                                <p className="ap3nama">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a4">
                    <div>
                        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    </div>
                    <div>
                        <p className="ap41">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <Link to="/search">
                        <button className="btn">Mulai Sewa Mobil</button>
                        </Link>
                    </div>
                </div>
                <div className="a5">
                    <div className="ap5">
                        <h1>Frequently Asked Question</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="question">
                        <div className="q1">
                            <div>
                                <h1>Apa saja syarat yang dibutuhkan?</h1>
                            </div>
                            <div><img src={arrow}/></div>
                        </div>
                        <div className="q1">
                            <div>
                                <h1>Berapa hari minimal sewa mobil lepas kunci?</h1>
                            </div>
                            <div><img src={arrow}/></div>
                        </div>
                        <div className="q1">
                            <div>
                                <h1>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h1>
                            </div>
                            <div><img src={arrow}/></div>
                        </div>
                        <div className="q1">
                            <div>
                                <h1>Apakah Ada biaya antar-jemput?</h1>
                            </div>
                            <div><img src={arrow}/></div>
                        </div>
                        <div className="q1">
                            <div>
                                <h1>Bagaimana jika terjadi kecelakaan</h1>
                            </div>
                            <div><img src={arrow}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home