"use client";

import Link from 'next/link'
import React from 'react'
import ReactGA from "react-ga4";

const list = [
  {
    url: '/',
    label: 'Home',
    key: 1
  },
  {
    url: '/products',
    label: 'Products',
    key: 2
  },
  {
    url: '/contact',
    label: 'Contact',
    key: 3
  },
  {
    url: '/cart',
    label: 'Cart',
    key: 4
  },
  {
    url: '/thank-you',
    label: 'Thank You',
    key: 5
  },
]
const Navbar = () => {

  const trackNavbarClick = (label: string, url: string, key: number) => {
    console.log("Tracking click event:", label, url); // Debugging

    // Hello
    ReactGA.event({
        category: "Navbar",
        action: "navbar-custom-event",
        label: label, // Name of the footer link
        value: key, // URL of the clicked link      
        nonInteraction: false,  
        // customDimensions: { location: "Navbar" }, // Custom event parameter

    });
    ReactGA.ga('send', 'event', 'Navbar', 'Click', label, {
      dimension1: "Navbar",  // Custom dimension for location
  });
};
  return (
    <div className='flex py-10'>
        <ul className='flex gap-5 mx-auto'>
          {
            list?.map((el, ind) => <li key={ind} onClick={() => trackNavbarClick(el?.label, el?.url, el.key)}><Link key={ind} href={el?.url}>{el.label}</Link></li> )
          }
        </ul>
    </div>
  )
}

export default Navbar