import { Metadata } from 'next';
import React from 'react'
import ReactGA from "react-ga4";

export const metadata: Metadata = {
    title: "Products Page",
    description: "Product Page Description",
  };

  const items = [
    { id: 'p001', title: 'Wireless Mouse', description: 'Ergonomic wireless mouse with Bluetooth connectivity.', price: 25 },
    { id: 'p002', title: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard with blue switches.', price: 70 },
    { id: 'p003', title: 'Gaming Headset', description: 'Surround sound headset with noise-canceling mic.', price: 50 },
    { id: 'p004', title: 'Smartwatch', description: 'Water-resistant smartwatch with fitness tracking.', price: 120 },
    { id: 'p005', title: 'Bluetooth Speaker', description: 'Portable speaker with deep bass and 12-hour battery.', price: 40 },
    { id: 'p006', title: 'External SSD', description: '1TB ultra-fast external SSD with USB-C support.', price: 150 },
    { id: 'p007', title: 'Smartphone Stand', description: 'Adjustable aluminum stand for phones and tablets.', price: 15 },
    { id: 'p008', title: 'Noise-Canceling Earbuds', description: 'Wireless earbuds with ANC and high-fidelity sound.', price: 90 },
    { id: 'p009', title: '4K Monitor', description: '27-inch 4K UHD monitor with HDR support.', price: 300 },
    { id: 'p010', title: 'Laptop Cooling Pad', description: 'High-speed cooling pad with adjustable fans.', price: 35 },
    { id: 'p011', title: 'USB-C Hub', description: '7-in-1 hub with HDMI, USB, and SD card slots.', price: 45 },
    { id: 'p012', title: 'Action Camera', description: 'Waterproof 4K action camera with stabilization.', price: 180 },
    { id: 'p013', title: 'Graphic Tablet', description: 'Pen tablet with pressure sensitivity for artists.', price: 95 },
    { id: 'p014', title: 'Smart Light Bulb', description: 'WiFi-enabled LED bulb with voice control.', price: 20 },
    { id: 'p015', title: 'Portable Power Bank', description: '20,000mAh fast-charging power bank.', price: 50 },
    { id: 'p016', title: 'VR Headset', description: 'Standalone VR headset with motion controllers.', price: 350 },
    { id: 'p017', title: 'Electric Toothbrush', description: 'Smart toothbrush with multiple cleaning modes.', price: 60 },
    { id: 'p018', title: 'Mini Projector', description: 'Compact 1080p projector for home theater.', price: 200 },
    { id: 'p019', title: 'Standing Desk Converter', description: 'Adjustable converter for sit-stand desks.', price: 130 },
    { id: 'p020', title: 'Coffee Grinder', description: 'Electric burr grinder with adjustable settings.', price: 55 }
];

const Products = () => {

    const trackFooterClick = (label: string, url: string, price: number) => {
        console.log("Tracking click event:", label, url); // Debugging
    
        ReactGA.event({
          category: "Footer",
          action: "Click",
          label: label, // Name of the footer link
          value: price, // URL of the clicked link
        });
      };
  return (
    <div className='px-10 flex flex-col gap-5'>
        {
            items?.map((item, index) => (
                <div key={index} className='bg-[rgba(40,40,40,0.1)] rounded-md p-10'>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <span>$ {item.price} </span>
            <footer className='flex gap-4'>
                <button onClick={() => trackFooterClick(item.title, item.description, item.price)}>Add to Cart</button>
                <button>Buy</button>
            </footer>
        </div>
            ))
        }
    </div>
  )
}

export default Products