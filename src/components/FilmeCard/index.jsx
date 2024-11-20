import React from "react";
import { Link } from "react-router-dom";

export function FilmeCard({ id, title, image }) {
  return (
    <article>
      <h3 className="mb-1 text-xl md:text-2xl lg:text-3xl">{title}</h3>
      <div className="rounded-t-lg">
        <img
          className="w-full object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
      </div>
      <Link
        className="
        rounded-b-lg block h-full p-3
        bg-emerald-900 text-white font-bold
        text-lg lg:text-xl text-center
        hover:opacity-85 transition-opacity
        "
        to={`/filme/${id}`}
      >
        Acessar
      </Link>
    </article>
  );
}
