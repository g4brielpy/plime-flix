import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="h-[90vh] min-h-[600px] flex flex-col items-center justify-center">
      <h1 className="font-bold text-9xl mb-4">404</h1>
      <h2 className="text-4xl mb-8">Página não encontrada</h2>
      <Link
        to={"/"}
        className="bg-black text-white p-4 cursor-pointer rounded-sm shadow-sm"
      >
        Vejas todos os filmes disponíveis
      </Link>
    </div>
  );
}
