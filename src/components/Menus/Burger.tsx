import React from "react"
import { StyledBurger } from "./Burger.styled"

interface BurgerProps {
  open: boolean
  setOpen: (e: boolean) => void
  color: string
}
const Burger = ({ open, setOpen, color, ...props }: BurgerProps) => {
  const isExpanded = open ? true : false
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      color={color}
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
