import { Link } from "react-router-dom";
import { Anime } from "../features/anime/types";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const img =
    anime.images?.webp?.image_url || anime.images?.jpg?.image_url || "";
  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="bg-slate-900/40 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-emerald-400/50 border border-transparent transition group"
    >
      <div className="aspect-[3/4] overflow-hidden bg-slate-800">
        {img ? (
          <img
            src={img}
            alt={anime.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
            No image
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{anime.title}</h3>
        <p className="text-xs text-slate-400 mt-1">
          Score: {anime.score ?? "N/A"} • Eps: {anime.episodes ?? "?"}
        </p>
      </div>
    </Link>
  );
};

export default AnimeCard;
