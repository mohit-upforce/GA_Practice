"use client";

import React from 'react'
import ReactGA from "react-ga4";

interface WrapperInterface{
    children: React.ReactNode
}
const Wrapper:React.FC<WrapperInterface> = props => {
    ReactGA.initialize("G-0XWDJ8PFMH");

  return (
    <>{props.children}</>
  )
}

export default Wrapper