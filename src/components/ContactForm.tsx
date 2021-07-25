import React from "react"
import FormInput from "./FormInput"

const ContactForm = () => {
  return (
    <form
      method="POST"
      action="https://getform.io/f/f7319679-7fcc-4b07-aebf-9627d72de93e"
    >
      <FormInput
        label="Name"
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name..."
        required
      />
      <FormInput
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email..."
        required
      />
      <FormInput
        label="Phone"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter your number..."
      />

      <div className="mb-3">
        <label htmlFor="message" className="block mb-1">
          Message: *
        </label>
        <textarea
          className="w-full rounded h-40 text-black p-2 border-2 border-gray-500"
          id="message"
          name="message"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-green-500 rounded w-full py-3 hover:bg-green-400 transition duration-300 ease-in font-medium"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
