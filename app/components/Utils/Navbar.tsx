import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-10'>
        <ul className='flex gap-5 mx-auto'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/thank-you">Thank You</Link></li>
        </ul>
    </div>
  )
}

export default Navbar