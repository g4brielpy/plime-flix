import React from "react";

export default function Loading() {
  // Quantidade de filmes por página
  const qtdsFilmes = 20;

  return (
    <>
      <h1
        className="
          font-bold text-center my-16
          text-2xl md:text-3xl lg:text-4xl"
      >
        Carregando Filmes em Cartaz
      </h1>
      <section className="container pb-12 flex flex-col items-center gap-8 ">
        {Array.from({ length: qtdsFilmes }).map((_, index) => (
          <div
            key={index}
            className="h-[700px] max-w-full w-[500px] rounded-md shadow-sm bg-slate-600"
          ></div>
        ))}
      </section>
    </>
  );
}
