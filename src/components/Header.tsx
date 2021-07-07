import React, { useRef } from "react"

const navLinks = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Blog",
  "Contact",
]

const Header = ({ siteTitle }) => {
  const hamburger = useRef(null)
  const hamburgerLine1 = useRef(null)
  const hamburgerLine2 = useRef(null)
  const hamburgerLine3 = useRef(null)
  const menu = useRef(null)

  const toggleMenu = () => {
    if (menu.current.classList.contains("hidden")) {
      // Translate hamburge into a cross (X)
      hamburgerLine1.current.classList.add("rotate-45")
      hamburgerLine2.current.classList.add("opacity-0")
      hamburgerLine3.current.classList.add("-rotate-45")

      hamburgerLine1.current.classList.remove("-translate-y-1.5")
      hamburgerLine3.current.classList.remove("translate-y-1.5")

      // Show the menu
      menu.current.classList.remove("hidden")
    } else {
      // Translate back to hamburger (3 stacked lines)
      hamburgerLine1.current.classList.remove("rotate-45")
      hamburgerLine2.current.classList.remove("opacity-0")
      hamburgerLine3.current.classList.remove("-rotate-45")

      hamburgerLine1.current.classList.add("-translate-y-1.5")
      hamburgerLine3.current.classList.add("translate-y-1.5")

      // Hide the menu
      menu.current.classList.add("hidden")
    }
  }

  return (
    <header className="fixed w-full z-30 top-0 text-white bg-blue-500">
      {/* Logo */}
      <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <a href="#" className="font-bold text-2xl lg:text-3xl">
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
          </a>
        </div>

        <div className="sm:hidden">
          <button
            ref={hamburger}
            className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white rounded"
            onClick={toggleMenu}
          >
            <div className="block w-5 absolute left-1/2 top-1/2   transform -translate-x-1/2 ">
              <span
                ref={hamburgerLine1}
                className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"
              ></span>
              <span
                ref={hamburgerLine2}
                className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              ></span>
              <span
                ref={hamburgerLine3}
                className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out translate-y-1.5"
              ></span>
            </div>
          </button>
        </div>

        {/* Menu */}
        <nav
          ref={menu}
          className="w-full flex-grow sm:flex sm:items-center sm:w-auto mt-4 sm:mt-0 sm:bg-transparent p-4 sm:p-0 z-20 text-center rounded hidden border-blue-300 border-t-2 sm:border-transparent"
        >
          <ul className="sm:flex justify-end flex-1 items-center">
            {navLinks.map(link => (
              <NavLink title={link} handleClick={toggleMenu} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

type NavLinkProps = {
  title: any
  handleClick?: any
}

const NavLink = ({ title, handleClick }: NavLinkProps) => {
  return (
    <li className="sm:ml-3 mb-4 sm:mb-0">
      <a
        href="#"
        className="hover:text-blue-900 sm:border-b-2 border-transparent hover:border-gray-100 font-medium sm:text-white sm:font-normal sm:hover:text-gray-100"
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  )
}

export default Header
