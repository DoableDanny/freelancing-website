import React from "react"

const ContactForm = () => {
  return (
    <form data-netlify="true" name="contact" method="post" action="/success/">
      <input type="text" name="name" className="text-black" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
