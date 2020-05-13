import React from "react"
import Head from "./header"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"
import { theme } from "../theme"
import "./css/main.css"
import MobileMenu from "./Menus/MobileMenu"
interface LayoutProps {
  children: any
}
const Layout = ({ children }: LayoutProps) => {
  if (typeof window !== `undefined`) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head />
        <MobileMenu />
        {children}
      </ThemeProvider>
    )
  }
  return null
}

export default Layout
