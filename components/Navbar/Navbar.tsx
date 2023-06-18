import React from 'react'
import  "./navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav className='navbar__main'>
            <div className="navbar__main__logo">
                <h1>MRA</h1>
            </div>
            <div className="navbar__main_menu">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/services">Services</Link>
            </div>
            <div className="navbar__main_button">
                <Link href="/contact">work with me</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar