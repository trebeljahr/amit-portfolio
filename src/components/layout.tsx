import React from "react"
import Head from "./header"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"
import { theme } from "../theme"
import "./css/main.css"
import MobileMenu from "./Menus/Mobile"
import DesktopMenu from "./Menus/Desktop"

interface LayoutProps {
  children: any
  color?: string
}
const Layout = ({ children, color = "white" }: LayoutProps) => {
  if (typeof window !== `undefined`) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head />
        <MobileMenu color={color} />
        <DesktopMenu />
        {children}
      </ThemeProvider>
    )
  }
  return null
}

export default Layout
