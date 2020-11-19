import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import './header.css'

const Header = ({ siteTitle }) => {

  useEffect(() => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')



    //toogle Nav
    if (burger && nav && navLinks) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        //Burger Animation

        burger.classList.toggle('toogle');

        //Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = ''
          }
          else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 1}s`

          }
        })
      })
    }

  }, []);

  return (
    <header>
      <nav>
        <Link to='/' className="brand">

          <span className="logo"></span>
          <p>foles.dev</p>
        </Link>
        <picture className="nav--logo">
          <a href=""><img src="https://www.flaticon.es/svg/static/icons/svg/424/424848.svg" alt="" /></a>
        </picture>
        <ul className="nav-links">
          <li> <Link to="/">HOME</Link></li>
          <li><Link to='/portfolio/'>PORTFOLIO</Link></li>
          <li><Link to='/about/'>ABOUT</Link></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>

        </div>
      </nav>
    </header>

  )




}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
