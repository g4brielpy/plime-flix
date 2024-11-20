import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { ButtonA } from "../../components/IU/Button";
import { API } from "../../utils/api";

import { toast } from "react-toastify";

import Loading from "./loading";

export default function Filme() {
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [filmesStorage, setFilmesStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSalvo, setIsSalvo] = useState(false);

  useEffect(() => {
    async function fetchFilme() {
      try {
        const responde = await API.get(`movie/${id}`, {
          params: {
            api_key: "4982b0cc449d4b6188e7b49b8b9fb7f2",
            language: "pt-BR",
          },
        });
        setFilme(responde.data);
      } catch (e) {
        console.error("Error: ", e);
      } finally {
        setLoading(false);
      }
    }

    // Recuperar filmes salvos e verificar se o filme atual já está salvo
    const filmesSalvos =
      JSON.parse(localStorage.getItem("@filmesFavoritos")) || [];
    setFilmesStorage(filmesSalvos);

    if (filmesSalvos.find((filme) => filme.id === parseInt(id, 10))) {
      setIsSalvo(true);
    }

    fetchFilme();
  }, [id]);

  function saveMovie() {
    // Verificar se o filme já está favoritado
    if (isSalvo) {
      toast.info("Filme já favoritado");
      return;
    }

    // Atualizar o estado com o novo filme salvo
    const novosFilmes = [...filmesStorage, filme];
    setFilmesStorage(novosFilmes);

    // Atualizar o localStorage
    localStorage.setItem("@filmesFavoritos", JSON.stringify(novosFilmes));

    toast.success("Filme salvo com sucesso!");
    setIsSalvo(true); // Desativa o botão
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <article className="container py-16 flex justify-center">
      <div className="bg-black text-white w-full max-w-[600px] p-4 rounded-sm">
        <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
          {filme.title}
        </h1>
        <img
          className="object-cover m-auto my-10 rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          alt={filme.original_title}
        />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-bold">
            Sinopse
          </h2>
          <p className="md:text-lg lg:text-xl text-justify">{filme.overview}</p>
        </div>
        <nav className="mt-12 flex justify-around flex-wrap">
          <button
            onClick={saveMovie}
            className={`px-6 py-2 bg-red-900 text-white rounded-sm ${
              isSalvo ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSalvo}
          >
            {isSalvo ? "Salvo" : "Salvar"}
          </button>
          <ButtonA
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${filme.title}`}
          >
            Ver Trailer
          </ButtonA>
        </nav>
      </div>
    </article>
  );
}
