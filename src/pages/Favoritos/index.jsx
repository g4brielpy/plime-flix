import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmesFavoritos, setFilmesFavoritos] = useState([]);

  useEffect(() => {
    const filmesStorage = JSON.parse(localStorage.getItem("@filmesFavoritos"));

    if (filmesStorage) {
      setFilmesFavoritos(filmesStorage);
    }
  }, []);

  function deletarFilme(id) {
    const filmesAtualizados = filmesFavoritos.filter((filme) => filme.id != id);

    setFilmesFavoritos(filmesAtualizados);
    localStorage.setItem("@filmesFavoritos", JSON.stringify(filmesAtualizados));
    toast.success("Filme deletado com sucesso!");
  }

  if (!filmesFavoritos.length) {
    return (
      <main className="container py-12">
        {filmesFavoritos && (
          <div className="text-center flex justify-center items-center h-[80vh]">
            <div className="">
              <h2 className="text-3xl mb-8">Você não tem filmes favoritos</h2>
              <Link to={"/"} className="underline text-xl">
                Ver todos os filmes
              </Link>
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="container py-12 min-h-[90vh]">
      <h1
        className="
          font-bold text-center mb-8
          text-2xl md:text-3xl lg:text-4xl"
      >
        Meus Favoritos
      </h1>

      <section>
        <ul className="space-y-8">
          {filmesFavoritos.map((filme) => {
            return (
              <li
                key={filme.id}
                className="
                 flex flex-col md:flex-row md:items-center flex-wrap justify-between gap-4
                bg-stone-50 rounded-md shadow-md p-4
              "
              >
                <h2 className="text-xl">{filme.title}</h2>
                <div className="flex gap-4 md:gap-8">
                  <Link
                    to={`/filme/${filme.id}`}
                    className="bg-black text-white px-2 py-2 rounded-md"
                  >
                    Detalhes
                  </Link>
                  <button
                    onClick={() => deletarFilme(filme.id)}
                    className="bg-red-900 text-white px-2 py-2 rounded-md"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
