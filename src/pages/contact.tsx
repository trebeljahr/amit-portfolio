import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div>
        <h1> So now you want to get in touch?</h1>
        <div>
          <h2>Mail</h2>
          <h3>amitmeena@some-mail.com</h3>
        </div>
        <div>
          <h2>Social Media Stuff</h2>
          <h3>Behance</h3>
          <h3>TikTok</h3>
          <h3>Facebook</h3>
        </div>
        <div>
          <h2>Or... leave me a call/whatsapp</h2>
          <h3>+019499387210938</h3>
        </div>
        <div>
          <h2>Location</h2>
          <h3>Delhi, India</h3>
        </div>
        <div>
          <h2>Time Zone</h2>
          <h3>UTC+5:30</h3>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
