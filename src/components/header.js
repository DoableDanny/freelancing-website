import React from "react"

const navLinks = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Blog",
  "Contact",
]

const Header = () => {
  return (
    <nav className="fixed w-full z-30 top-0 text-white bg-blue-500">
      {/* Logo */}
      <div className="container p-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <a href="#" className="font-bold text-2xl lg:text-3xl">
            AutoSites
          </a>
        </div>

        {/* Hamburger */}
        <div class="lg:hidden">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-blue-700 lg:bg-transparent p-4 lg:p-0 z-20 hidden">
          <ul className="lg:flex justify-end flex-1 items-center">
            {navLinks.map(link => (
              <NavLink title={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ title }) => {
  return (
    <li className="ml-3">
      <a
        href="#"
        className="hover:text-gray-100 border-b-2 border-transparent hover:border-gray-100 pb-2"
      >
        {title}
      </a>
    </li>
  )
}

export default Header
