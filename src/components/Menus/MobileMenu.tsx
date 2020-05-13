import React, { useState } from "react"
import Burger from "./Burger"
import Menu from "./Menu"

function MobileMenu({ ...props }) {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} {...props} />
    </>
  )
}

export default MobileMenu
