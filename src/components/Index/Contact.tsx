import React from "react"
import Fade from "react-reveal/Fade"
import ContactForm from "../ContactForm"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 text-white bg-gradient-to-r from-blue-700 to-blue-500"
    >
      <div className="container mx-auto px-4 max-w-xl">
        <Fade>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-2xl my-4 font-medium mb-8">
              Send us a message below, feel free to ask us anything.
            </p>
          </div>
        </Fade>

        <Fade left>
          <ContactForm />
        </Fade>
      </div>
    </section>
  )
}

export default Contact
