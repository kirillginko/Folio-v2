import React from "react"
import "./contact.css"

function Contact() {
  return (
    <section className="contact__container" data-scroll-section>
      <div className="contact__header">
        <h2>Contact</h2>
      </div>
      <div className="contact__links">
        <a
          href="mailto:kirillginko@gmail.com?subject=Let%27s%20make%20something%20cool"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/kirillginko"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.instagram.com/co_existenz/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
          Dribbble
        </a>
        <a href="#" target="_blank"></a>
      </div>
    </section>
  )
}

export default Contact
