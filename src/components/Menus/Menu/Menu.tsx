import React from "react"
import { StyledMenu } from "./Menu.styled"
import { Link } from "gatsby"

interface MenuProps {
  open: boolean
  setOpen: (e: boolean) => void
}
const Menu = ({ open, setOpen, ...props }: MenuProps) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="mobile-menu" tabIndex={tabIndex}>
        <Link to="/" activeStyle={{ textDecoration: "underline" }}>
          Amit Meena
        </Link>
        <Link to="/projects" activeStyle={{ textDecoration: "underline" }}>
          projects
        </Link>
        <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
          about
        </Link>
      </div>
    </StyledMenu>
  )
}

export default Menu
