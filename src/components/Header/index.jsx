import React from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../IU/Button";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav
        className="
        container py-4 flex justify-around items-center
        md:text-xl lg:text-2xl"
      >
        <Link to={"/"} className="font-bold">
          Plime Flix
        </Link>
        <ButtonLink href={"/favoritos"}>Meus Filmes</ButtonLink>
      </nav>
    </header>
  );
}
