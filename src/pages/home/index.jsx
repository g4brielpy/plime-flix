import { useState, useEffect } from "react";
import { API } from "../../utils/api";

import { FilmeCard } from "../../components/FilmeCard";
import Loading from "./loading";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await API.get("movie/now_playing", {
          params: {
            api_key: "4982b0cc449d4b6188e7b49b8b9fb7f2",
            language: "pt-BR",
          },
        });

        setFilmes(response.data.results);
      } catch (e) {
        console.log("Erro:" + e);
      } finally {
        setLoading(false);
      }
    }

    fetchAPI();
  }, [filmes]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main>
        <div className="container py-12">
          <h1
            className="
          font-bold text-center 
          text-2xl md:text-3xl lg:text-4xl"
          >
            Filmes cartaz nos cinemas
          </h1>

          <section className="mt-10 flex flex-col items-center gap-12">
            {filmes.map((filme) => {
              return (
                <FilmeCard
                  key={filme.id}
                  id={filme.id}
                  title={filme.title}
                  image={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                />
              );
            })}
          </section>
        </div>
      </main>
    );
  }
}
