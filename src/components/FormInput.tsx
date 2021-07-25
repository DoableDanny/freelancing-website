import React from "react"

type FormInputProps = {
  label: string
  id: string
  name: string
  type: "text" | "email" | "tel"
  placeholder: string
  required?: boolean
}

const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  required,
}: FormInputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={id} className="mb-1">
        {label}: {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="rounded p-2 border-2 border-gray-500 text-black w-full"
      />
    </div>
  )
}

export default FormInput
