import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import paris from '../components/images/paris.jpg'
import newyork from '../components/images/newyork.jpg'
import sydney from '../components/images/sydney.jpeg'
import tokyo from '../components/images/tokyo.jpeg'
const Home = () => {
    return (
        <div>
            <Navbar />
            <header className="header">
                <div className="container">
                    <h1>Explore the World</h1>
                    <p>Your adventure starts here</p>
                    <a href='Book-now' className="btn-primary">Book Now</a>
                </div>
            </header>
            <main className="main">
                <section className="intro">
                    <div className="container">
                        <h2>Discover Amazing Places</h2>
                        <p>From the majestic mountains to the serene beaches, we bring you the best destinations for an unforgettable experience.</p>
                    </div>
                </section>

                <section className="destinations">
                    <div className="container">
                        <h2>Popular Destinations</h2>
                        <div className="destination-grid">
                            <div className="destination-item">
                                <img src={paris} alt="paris" />
                                <h3>Paris</h3>
                                <p>The city of lights and love.</p>
                            </div>
                            <div className="destination-item">
                                <img src={newyork} alt="new-york" />
                                <h3>New York</h3>
                                <p>The city that never sleeps.</p>
                            </div>
                            <div className="destination-item">
                                <img src={sydney} alt="sydney" />
                                <h3>Sydney</h3>
                                <p>The beautiful harbour city.</p>
                            </div>
                            <div className="destination-item">
                                <img src={tokyo} alt="tokyo" />
                                <h3>Tokyo</h3>
                                <p>A blend of tradition and modernity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <h2>Our Services</h2>
                        <div className="services-grid">
                            <div className="service-item">
                                <h3>Custom Itineraries</h3>
                                <p>Personalized travel plans tailored to your preferences.</p>
                            </div>
                            <div className="service-item">
                                <h3>Flight Bookings</h3>
                                <p>Best deals on flights to your dream destinations.</p>
                            </div>
                            <div className="service-item">
                                <h3>Hotel Reservations</h3>
                                <p>Luxurious and comfortable accommodations.</p>
                            </div>
                            <div className="service-item">
                                <h3>Travel Insurance</h3>
                                <p>Comprehensive insurance plans for a worry-free trip.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home
