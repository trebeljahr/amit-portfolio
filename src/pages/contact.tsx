import React from "react"
import Layout from "../components/layout"
import indiaIcon from "../assets/images/india.svg"

const Contact = () => {
  return (
    <Layout color="black">
      <div className="contact-container">
        <div className="contact-grid">
          <h1 id="contact-heading">
            Conversations are the currency of life. Let’s get rich!
          </h1>
          <div id="mail-container">
            <h2>Leave me a mail</h2>
            <p>
              <i className="fas fa-paper-plane" /> amitravi.rv@gmail.com
            </p>
          </div>
          <div id="social-media-container">
            <h2>Social Media Stuff</h2>
            <p>
              <i className="fab fa-behance-square" /> Behance
            </p>
            <p>
              <i className="fab fa-instagram" /> Instagram
            </p>
            <p>
              <i className="fab fa-facebook-square" /> Facebook
            </p>
          </div>
          <div id="phone-container">
            <h2>...or a call/whatsapp</h2>
            <p>
              <i className="fab fa-whatsapp" /> +91 98737 74177
            </p>
          </div>
          <div id="location-container">
            <h2>Location</h2>
            <img src={indiaIcon}></img>
            <p>Delhi, India</p>
          </div>
          <div id="time-zone-container">
            <h2>Time Zone</h2>
            <p>UTC+5:30</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
