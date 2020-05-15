import React from "react"
import { Link } from "gatsby"

const MenuLinks = () => (
  <>
    <Link to="/" activeStyle={{ textDecoration: "underline" }}>
      home
    </Link>
    <Link to="/404" activeStyle={{ textDecoration: "underline" }}>
      404
    </Link>
    <Link to="/projects" activeStyle={{ textDecoration: "underline" }}>
      projects
    </Link>
    <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
      contact
    </Link>
    <Link to="/deepest-secrets" activeStyle={{ textDecoration: "underline" }}>
      deepest-secrets
    </Link>
  </>
)
export default MenuLinks
