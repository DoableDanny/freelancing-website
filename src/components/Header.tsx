import React, { useState } from "react"
import { Link } from "gatsby"

const navLinks = [
  { title: "About", url: "/#about" },
  { title: "Portfolio", url: "/#portfolio" },
  { title: "Pricing", url: "/#pricing" },
  { title: "Blog", url: "/#blog" },
  { title: "Contact", url: "/#contact" },
]

const Header = ({ siteTitle }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const hamburgerLineClasses =
    "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"

  return (
    <header className="fixed w-full z-30 top-0 text-white bg-blue-500">
      {/* Logo */}
      <div className="container p-4 xl:px-16 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link to="/" className="font-bold text-2xl lg:text-3xl">
            {/* Icon from: http://www.potlabicons.com/ */}
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <rect
                fill="#2a2a31"
                x="16.539"
                y="425.626"
                width="479.767"
                height="50.502"
                transform="matrix(1,0,0,1,0,0)"
              />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
            {siteTitle}
          </Link>
        </div>

        {/* Hamburger */}
        <div className="sm:hidden">
          <button
            className="text-gray-600 w-8 h-8 relative focus:outline-none bg-white rounded"
            onClick={() => setIsHamburgerOpen(current => !current)}
          >
            {/* Three Hamburger Lines */}
            <div className="block w-5 absolute left-1/2 top-1/2   transform -translate-x-1/2 ">
              <span
                className={`${hamburgerLineClasses} ${
                  isHamburgerOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`${hamburgerLineClasses} ${
                  isHamburgerOpen ? "opacity-0" : null
                }`}
              ></span>
              <span
                className={`${hamburgerLineClasses} ${
                  isHamburgerOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menu */}
        <nav
          className={`w-full flex-grow sm:flex sm:items-center sm:w-auto mt-4 sm:mt-0 sm:bg-transparent p-4 sm:p-0 z-20 text-center rounded border-blue-300 border-t-2 sm:border-transparent ${
            isHamburgerOpen ? null : "hidden"
          }`}
        >
          <ul className="sm:flex justify-end flex-1 items-center">
            {navLinks.map(link => (
              <NavLink
                title={link.title}
                href={link.url}
                handleClick={() => {
                  if (isHamburgerOpen) {
                    setIsHamburgerOpen(false)
                  }
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

// Nav link component
type NavLinkProps = {
  title: string
  href: string
  handleClick?: () => void
}

const NavLink = ({ title, href, handleClick }: NavLinkProps) => {
  return (
    <li className="sm:ml-4 mb-4 sm:mb-0">
      <Link
        to={href}
        className="hover:text-blue-900 sm:border-b-2 border-transparent hover:border-gray-100 font-medium sm:text-white sm:font-normal sm:hover:text-gray-100 sm:pb-1 text-lg"
        onClick={handleClick}
      >
        {title}
      </Link>
    </li>
  )
}

export default Header
