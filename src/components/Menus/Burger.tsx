import React from "react"
import { StyledBurger } from "./Burger.styled"

interface BurgerProps {
  open: boolean
  setOpen: (e: boolean) => void
}
const Burger = ({ open, setOpen, ...props }: BurgerProps) => {
  const isExpanded = open ? true : false
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger
