"use client"

import React from 'react'
import ReactGA from "react-ga4";

const ProductCard = ({ title, description, price }: { title: string, description: string, price: number }) => {

    const trackFooterClick = (label: string, url: string, price: number) => {
        console.log("Tracking click event:", label, url); // Debugging

        ReactGA.event({
            category: "Products",
            action: "add-to-cart",
            label: label, // Name of the footer link
            value: price, // URL of the clicked link
        });
        ReactGA.ga('send', 'event', 'Products', 'Click', label, {
            dimension1: "Products",  // Custom dimension for location
        });
    };
    return (
        <div className='bg-[rgba(40,40,40,0.1)] rounded-md p-10'>
            <p>{title}</p>
            <p>{description}</p>
            <span>$ {price} </span>
            <footer className='flex gap-4'>
                <button className='product-clicko' id='product-clicko' onClick={() => trackFooterClick(title, description, price)}>Add to Cart</button>
                <button>Buy</button>
            </footer>
        </div>
    )
}

export default ProductCard