"use client";

import React, { useEffect } from 'react'
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";  // Import GTM package
interface WrapperInterface{
    children: React.ReactNode
}
const Wrapper:React.FC<WrapperInterface> = props => {
    ReactGA.initialize("G-0XWDJ8PFMH");

    useEffect(() => {
      TagManager.initialize({ gtmId: "GTM-TN3L3KP4" }); // Use GTM ID
    }, []);
  return (
    <>{props.children}</>
  )
}

export default Wrapper