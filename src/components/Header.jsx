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
            {/* Icon from: http://www.potlabicons.com/ */}
            <svg
              class="h-8 fill-current inline"
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
                class="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
            AutoSites
          </a>
        </div>

        {/* Hamburger */}
        <div class="lg:hidden">
          <button
            id="nav-toggle"
            class="flex items-center text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
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
