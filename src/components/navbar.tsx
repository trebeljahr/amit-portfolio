import React, { useState } from "react"
import Link from "gatsby-link"

interface NavbarProps {
  desktop: boolean
  color: string
  sub?: string
}
export function Navbar({ desktop = false, color, sub = "" }: NavbarProps) {
  const [subMenu, setSubMenu] = useState(sub)
  return <DesktopNavbar subMenu={subMenu} setSubMenu={setSubMenu} />
}

interface DesktopNavbarProps {
  subMenu: string
  setSubMenu: (e: string) => void
}
const DesktopNavbar = ({ subMenu, setSubMenu }: DesktopNavbarProps) => {
  return (
    <>
      <div className="desktop-menu">
        <h3>
          <Link to="/about" activeStyle={{ color: "grey" }}>
            about
          </Link>
        </h3>
      </div>
    </>
  )
}
