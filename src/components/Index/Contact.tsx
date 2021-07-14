import React from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 text-white bg-gradient-to-r from-blue-700 to-blue-500"
    >
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-2xl my-4 font-medium mb-8">
            Feel free to ask us anything. Send us a message below or call us on
            01232 765 374
          </p>
        </div>
        <form className="mx-auto">
          <FormInput
            label="Name"
            inputType="text"
            placeholder="Enter your name..."
            required
          />
          <FormInput
            label="Email"
            inputType="email"
            placeholder="Enter your email..."
            required
          />
          <FormInput
            label="Phone"
            inputType="tel"
            placeholder="Enter your phone number..."
          />
          <div>
            <label className="block mb-1">Message *</label>
            <textarea
              className="w-full rounded h-40 text-black p-2 mb-3"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 rounded w-full py-3 hover:bg-green-400 transition duration-300 ease-in font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

type FormInputProps = {
  label: string
  inputType: string
  placeholder: string
  required?: boolean
}
const FormInput = ({
  label,
  inputType,
  placeholder,
  required,
}: FormInputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-1">
        {label}
        {required && " *"}
      </label>
      <input
        type={inputType}
        className="rounded border-2 border-gray-500 p-2 text-black"
        placeholder={placeholder}
        required={required}
      ></input>
    </div>
  )
}

export default Contact
