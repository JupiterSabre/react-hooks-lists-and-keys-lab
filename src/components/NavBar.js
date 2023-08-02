import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarLinks = links.map((navLink) => {
    return <a key={navLink} href={`#${navLink}`}>{navLink}</a>
  })

  return <nav>{navBarLinks}</nav>;
}

export default NavBar;
