import React, { useState } from "react"
import { ChangeEventHandler } from "react"
import Fade from "react-reveal/Fade"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, phone, message }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <section
      id="contact"
      className="py-12 text-white bg-gradient-to-r from-blue-700 to-blue-500"
    >
      <Fade left>
        <div className="container mx-auto px-4 max-w-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-2xl my-4 font-medium mb-8">
              Feel free to ask us anything. Send us a message below or call us
              on 01232 765 374
            </p>
          </div>
          <form
            className="mx-auto"
            method="POST"
            data-netlify="true"
            name="contact"
            netlify-honeypot="bot-field"
          >
            <label className="hidden">
              This is a hidden field to trick bots:
              <input name="bot-field" />
            </label>
            <FormInput
              label="Name"
              inputType="text"
              placeholder="Enter your name..."
              value={name}
              handleChange={(e: { target: HTMLInputElement }) =>
                setName(e.target.value)
              }
              required
            />
            <FormInput
              label="Email"
              inputType="email"
              placeholder="Enter your email..."
              value={email}
              handleChange={(e: { target: HTMLInputElement }) =>
                setEmail(e.target.value)
              }
              required
            />
            <FormInput
              label="Phone"
              inputType="tel"
              placeholder="Enter your phone number..."
              value={phone}
              handleChange={(e: { target: HTMLInputElement }) =>
                setPhone(e.target.value)
              }
            />
            <div>
              <label className="block mb-1">Message: *</label>
              <textarea
                className="w-full rounded h-40 text-black p-2 mb-3"
                name="message"
                placeholder="Your message here..."
                onChange={e => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
            </div>
            <p className="text-white">
              {name}
              {email}
              {phone}
              {message}
            </p>
            <button
              type="submit"
              className="bg-green-500 rounded w-full py-3 hover:bg-green-400 transition duration-300 ease-in font-medium"
              onSubmit={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </Fade>
    </section>
  )
}

type FormInputProps = {
  label: string
  inputType: string
  placeholder: string
  value: string
  handleChange: any
  required?: boolean
}
const FormInput = ({
  label,
  inputType,
  placeholder,
  value,
  handleChange,
  required,
}: FormInputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-1" htmlFor={label.toLowerCase()}>
        {label}:{required && " *"}
      </label>
      <input
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        type={inputType}
        className="rounded border-2 border-gray-500 p-2 text-black"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
      ></input>
    </div>
  )
}

export default Contact
