import React from "react"
import { Link } from "gatsby"

const MenuLinks = () => (
  <>
    <Link to="/" activeStyle={{ textDecoration: "underline" }}>
      home
    </Link>
    <Link to="/portfolio" activeStyle={{ textDecoration: "underline" }}>
      portfolio
    </Link>
    <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
      contact
    </Link>
    <Link to="/deepest-secrets" activeStyle={{ textDecoration: "underline" }}>
      my deepest secrets
    </Link>
  </>
)
export default MenuLinks
